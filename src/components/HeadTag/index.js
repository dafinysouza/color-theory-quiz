import React from 'react';
import Head from 'next/head';

function HeadTag() {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>Quiz: Teoria das cores</title>
      <meta name="title" content="Quiz: Teoria das cores" />
      <meta name="description" content="Teste seu conhecimento sobre como as cores funcionam na web!" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://color-theory-quiz.dafinysouza.vercel.app/" />
      <meta property="og:title" content="Quiz: Teoria das cores" />
      <meta property="og:description" content="Teste seu conhecimento sobre como as cores funcionam na web!" />
      <meta property="og:image" content="https://raw.githubusercontent.com/dafinysouza/color-theory-quiz/main/src/image/og-color.jpg" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://color-theory-quiz.dafinysouza.vercel.app/" />
      <meta property="twitter:title" content="Quiz: Teoria das cores" />
      <meta property="twitter:description" content="Teste seu conhecimento sobre como as cores funcionam na web!" />
      <meta property="twitter:image" content="https://raw.githubusercontent.com/dafinysouza/color-theory-quiz/main/src/image/og-color.jpg" />

      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
    </Head>
  );
}

export default HeadTag;
