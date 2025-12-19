import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Ella - Product Manager & Data Scientist specializing in AI/ML and Generative AI. Portfolio showcasing research projects and product management work." />
        <meta name="keywords" content="Product Manager, Data Scientist, AI, Machine Learning, Generative AI, NLP, Product Management" />
        <meta name="author" content="Ella" />
        <meta property="og:title" content="Ella - Product Manager & Data Scientist" />
        <meta property="og:description" content="Product Manager & Data Scientist specializing in AI/ML and Generative AI" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
