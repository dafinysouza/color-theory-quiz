import Head from 'next/head';

function HeadTag() {
    return (
        <Head>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="description" content="Teste seu conhecimento sobre como as cores funcionam na web!" />
            <meta property="og:url" content="https://color-theory-quiz.dafinysouza.vercel.app/" />
            <meta property="og:title" content="Quiz: Teoria das cores" />
            <meta property="og:description" content="Teste seu conhecimento sobre como as cores funcionam na web!" />
            <meta property="og:image" content="" />
            <title>Quiz: Teoria das cores</title>
        </Head>
    )
}

export default HeadTag;