import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Russo+One"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Itim&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Itim&family=Nunito&display=swap" rel="stylesheet"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
