import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="Add captions to your images." />
          <meta property="og:site_name" content="" />
          <meta
            property="og:description"
            content="Add captions to your images."
          />
          <meta property="og:title" content="CaptionAI" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="CaptionAI" />
          <meta
            name="twitter:description"
            content="Add captions to your images."
          />
          <meta
            property="og:image"
            content=""
          />
          <meta
            name="twitter:image"
            content=""
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
