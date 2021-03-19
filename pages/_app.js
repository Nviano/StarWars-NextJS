import Head from 'next/head'

import '../styles/globals.css'
import 'bootswatch/dist/darkly/bootstrap.min.css'

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Star Wars App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
