// import Head from 'next/head';
import Player from '@/components/Player';
import Layout from '@/components/Layout';
import fetcher from '@/utils/fetcher';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import Head from 'next/head';

export default function PlayerPage() {
  const router = useRouter();
  const fullQuery = router.query?.slug;
  const serieSlug = fullQuery ? fullQuery[0] : null;
  const seasonSlug = fullQuery ? fullQuery[1] : null;
  const episodeSlug = fullQuery ? fullQuery[2] : null;

  const endpoint = `/api/serie/${serieSlug}`;
  const { data: serieData } = useSWR(endpoint, fetcher);
  const serie = serieData?.serie;

  return (
    <Layout>
      <Head>
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `
              if (!document.cookie || !document.cookie.includes('lucasnhimi-auth')) {
                window.location.href = "/"
              }
            `,
          }}
        />
      </Head>
      {serie && (
        <Player
          serie={serie}
          seasonSlug={seasonSlug}
          episodeSlug={episodeSlug}
        />
      )}
    </Layout>
  );
}
