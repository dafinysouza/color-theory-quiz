import React from 'react';
import Head from 'next/head';

function HeadTag() {
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="Teste seu conhecimento sobre como as cores funcionam na web!" />
      <meta property="og:url" content="https://color-theory-quiz.dafinysouza.vercel.app/" />
      <meta property="og:title" content="Quiz: Teoria das cores" />
      <meta property="og:description" content="Teste seu conhecimento sobre como as cores funcionam na web!" />
      <meta property="og:image" content="https://raw.githubusercontent.com/dafinysouza/color-theory-quiz/main/src/image/og-color.jpg" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
      <title>Quiz: Teoria das cores</title>
    </Head>
  );
}

export default HeadTag;
