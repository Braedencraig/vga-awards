import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
      <meta charSet="utf-8" />
        <meta name="description" content="Video Game Accessibility Awards" />
        <meta property="og:title" content="Video Game Accessibility Awards" />
        <meta
          property="og:description"
          content="Video Game Accessibility Awards"
        />
        <meta property="og:url" content="http://vgaawards.com//" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="http://vgaawards.com//logo.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="500" />
        <meta property="og:image:height" content="500" />
        <meta name="twitter:title" content="Video Game Accessibility Awards" />
        <meta
          name="twitter:description"
          content="Video Game Accessibility Awards"
        />
        <meta name="twitter:image" content="http://vgaawards.com//logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA=="
          crossOrigin="true"
          referrerPolicy="no-referrer"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
          rel="stylesheet"
          crossOrigin="true"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
