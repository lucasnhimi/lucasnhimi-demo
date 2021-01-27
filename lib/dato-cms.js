const API_URL = 'https://graphql.datocms.com/';
const API_TOKEN = process.env.DATOCMS_READ_ONLY_API_TOKEN;

async function fetchCmsAPI(query, { variables } = {}) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    throw new Error('Failed to fetch API');
  }

  return json.data;
}

export async function getAllSeries() {
  const data = await fetchCmsAPI(`
    {
      allSeries {
        name
        slug
        description
        thumbUrl {
          id
          url
        }
        seasons {
          id
        }
      }
    }
  `);

  return data.allSeries;
}

export async function getAllFullSeries() {
  const data = await fetchCmsAPI(`
  {
    allSeries {
      name
      slug
      description
      seasons {
        id
        slug
        name
        description
        episodes {
          id
          slug
          name
          description
          videoUrl 
          author {
            id
          }
          videoTime
          thumbUrl {
            id
          }
          order
        }
      }
    }
  }
  `);

  return data.allSeries.sort((s) =>
    s.seasons.sort((c) => c.episodes.sortAsc((e) => e.order)),
  );
}