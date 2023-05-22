import '@/styles/globals.css'
// pages/_app.js
import React from 'react'
import Head from 'next/head'
import CustomHead from '../components/CustomHead';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Vidit Kushwaha</title>
        <meta name="description" content="I am a second year student pursuing Metallurgical and Materials Engineering @ NIT Rourkela." />
        <meta name="keywords" content="vidit kushwaha portfolio" />
        <meta property="og:title" content="Your Open Graph Title" />
        <meta property="og:description" content="I am a second year student pursuing Metallurgical and Materials Engineering @ NIT Rourkela. I'm always open to new experiences, meeting new people, and learning new things." />
        <link rel="canonical" href="https://www.viditkushwaha.live/" />

        <link rel="icon" type="ico" href="icon/icon.ico" />
        <link rel="apple-touch-icon" type="ico" href="icon/icon.ico" />
        <link rel="icon" type="image/png" sizes="192x192" href="icon/android-chrome-192x192.png" />
        <link rel="apple-touch-icon" type="image/png" sizes="192x192" href="icon/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="icon/android-chrome-512x512.png" />
        <link rel="apple-touch-icon" type="image/png" sizes="512x512" href="icon/android-chrome-512x512.png" />
        <link rel="icon" type="image/png" href="icon/apple-touch-icon.png" />
        <link rel="apple-touch-icon" type="image/png" href="icon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png" />
        <link rel="apple-touch-icon" type="image/png" sizes="16x16" href="favicon-16x16.png" />
        <link rel="icon" type="ico" href="favicon.ico" />
        <link rel="apple-touch-icon" type="ico" href="favicon.ico" />
        <meta name="theme-color" content="#0a192f" />

        <link rel="manifest" href="manifest.json" />

        {/* <!-- Google tag (gtag.js) --> */}

        {/* CDN  */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>
      <CustomHead />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp