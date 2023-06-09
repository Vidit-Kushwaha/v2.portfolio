import '@/styles/globals.css'
// pages/_app.js
import React from 'react'
import Head from 'next/head'
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Vidit Kushwaha</title>
        <meta name="description" content="I am a second year student pursuing Metallurgical and Materials Engineering @ NIT Rourkela." />
        <meta name="keywords" content="vidit kushwaha, portfolio, viditkushwaha, vidit" />
        <meta property="og:title" content="Hi, my name is Vidit Kushwaha" />
        <meta property="og:description" content="I am a second year student pursuing Metallurgical and Materials Engineering @ NIT Rourkela. I'm always open to new experiences, meeting new people, and learning new things." />
        <meta property="og:site_name" content="Vidit Kushwaha"/>
        <meta property="og:type" content="website"/>
        <meta property="twitter:card" content="summary_large_image"></meta>
        <meta property="twitter:creator" content="@vidit9011"></meta>
        <meta property="twitter:site" content="@vidit9011"></meta>
        <meta property="twitter:title" content="Vidit Kushwaha"></meta>
        <meta property="twitter:description" content="I am a second year student pursuing Metallurgical and Materials Engineering @ NIT Rourkela."></meta>
        <meta property="twitter:url" content="https://viditkushwaha.live/"></meta>
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

        {/* CDN  */}
        
      </Head>

      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-12W70FFEK3"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-12W70FFEK3');
        `}
      </Script>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp