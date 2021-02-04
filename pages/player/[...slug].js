// import Head from 'next/head';
import Player from '@/components/Player';
import Layout from '@/components/Layout';
import fetcher from '@/utils/fetcher';
import { useRouter } from 'next/router';
import useSWR, { mutate } from 'swr';
import Head from 'next/head';
import { createHistory } from '@/lib/db';
import useAuth from '@/hooks/useAuth';

export default function PlayerPage() {
  const { user } = useAuth();
  const router = useRouter();
  const fullQuery = router.query?.slug;
  const serieSlug = fullQuery ? fullQuery[0] : null;
  const seasonSlug = fullQuery ? fullQuery[1] : null;
  const episodeSlug = fullQuery ? fullQuery[2] : null;

  const historyEndpoint = `/api/history/${user?.uid}`;
  const { data: serieData } = useSWR(`/api/serie/${serieSlug}`, fetcher);
  const { data: historyData } = useSWR(historyEndpoint, fetcher);

  const serie = serieData?.serie;
  const allHistory = historyData?.history;

  const handleSaveHistory = (newHistory) => {
    createHistory(newHistory);
    mutate(
      historyEndpoint,
      async (data) => ({
        history: [newHistory, ...data.history],
      }),
      false,
    );
  };

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
          onSaveHistory={handleSaveHistory}
          allHistory={allHistory}
        />
      )}
    </Layout>
  );
}
