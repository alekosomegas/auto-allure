import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Allure Rent-a-Car</title>

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Birthstone+Bounce:wght@500&family=Meddon&family=Pacifico&display=swap" rel="stylesheet"></link>

        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400&display=swap" rel="stylesheet"/>
      
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
