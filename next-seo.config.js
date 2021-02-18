const title = 'Lucas Nhimi – Tecnologia direto ao ponto.';
const description = 'Aprenda programação direto ao ponto 100% free.';

const SEO = {
  title,
  description,
  canonical: 'https://lucasnhimi.io',
  openGraph: {
    type: 'website',
    locale: 'pr_BR',
    url: 'https://lucasnhimi.io',
    title,
    description,
    images: [
      {
        url: 'https://lucasnhimi.io/og.png',
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
};

export default SEO;
