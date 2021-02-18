import { getAllFullSeries } from '@/lib/dato-cms';
import Layout from '@/components/Layout';
import SerieView from '@/components/SerieView';

export default function StagePage({ serie, allSeries }) {
  return (
    <Layout
      title={serie.name}
      path={`/${serie.slug}`}
      description={serie.description}
    >
      <SerieView serie={serie} />
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const slug = params?.slug;
  const series = await getAllFullSeries();
  const serie = series.find((s) => s.slug === slug) || null;

  if (!serie) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      serie,
      allSeries: series,
    },
    revalidate: 60,
  };
};

export const getStaticPaths = async () => {
  const series = await getAllFullSeries();
  const slugs = series.map((s) => ({ params: { slug: s.slug } }));

  return {
    paths: slugs,
    fallback: false,
  };
};
