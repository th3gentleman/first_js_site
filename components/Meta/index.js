import Head from 'next/head';

export default () => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>

    <style jsx global>{`
      body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica,
          Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
        color: ##778899;
      }

      a {
        color: #1E90FF;
      }

      a:visited {
        color: #800080;
      }
    `}</style>
  </>
);
