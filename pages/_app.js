import Head from 'next/head';
import '../styles/globals.css';

function Application({ Component, pageProps }) {
  return (
    <div className="font-sans antialiased text-gray-600 min-h-screen flex flex-col bg-gray-50 dark:bg-coolGray-900 dark">
      <Head>
        <title>Farhan Nafis Azmali</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default Application;