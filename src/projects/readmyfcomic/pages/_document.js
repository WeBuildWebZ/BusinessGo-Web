import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/styles';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collect(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      ctx.renderPage(sheet);
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" type="image/png" href="/favicon.ico" />
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
