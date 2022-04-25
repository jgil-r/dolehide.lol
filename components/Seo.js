import Head from 'next/head';

export default function Seo({ meta }) {
  return (
    <Head>
      <title>{meta.title} | Daniel Dolehide</title>
      <meta name="title" content={meta.title} />
      <meta name="description" content={meta.description} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta
        property="og:image"
        content="https://www.dolehide.lol/favicon-32x32.png"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={meta.title} />
      <meta property="twitter:description" content={meta.description} />
      <meta
        property="twitter:image"
        content="https://www.dolehide.lol/favicon-32x32.png"
      />

      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
