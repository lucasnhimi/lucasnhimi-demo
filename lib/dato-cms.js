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
      description,
      updatedAt
      thumbUrl {
        url
      }
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
        }
      }
    }
  }
`);

  return data.allSeries;
}

export async function getSerie(serieSlug) {
  const data = await fetchCmsAPI(`
  {
    serie(filter: {slug: {eq: "${serieSlug}"}}) {
      name
        slug
        description,
        updatedAt
        thumbUrl {
          url
        }
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
          }
        }
    }
  }
  `);

  return data.serie;
}

export async function getAllTechnologies() {
  const data = await fetchCmsAPI(`
    {
      allTechnologies {
        name
        defaultVisible
        logo {
          url(imgixParams: {fm: jpg, fit: crop, w: 120, h: 120})
        }
      }
    }
  `);

  return data.allTechnologies;
}
