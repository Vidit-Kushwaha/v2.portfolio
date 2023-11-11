import '@/styles/globals.css'
// pages/_app.js
import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Script from 'next/script'
import { Footer, Navbar, Splashscreen } from '@/components'
import style from '@/styles/style'

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  }, [])

  // Sets target="_blank" rel="noopener noreferrer" on external links
  const handleExternalLinks = () => {
    const allLinks = Array.from(document.querySelectorAll('a'))
    if (allLinks.length > 0) {
      allLinks.forEach((link) => {
        if (link.host !== window.location.host) {
          link.setAttribute('rel', 'noopener noreferrer')
          link.setAttribute('target', '_blank')
        }
      })
    }
  }

  useEffect(() => {
    if (loading) {
      return
    }
    if (location.hash) {
      const id = location.hash.substring(1) // location.hash without the '#'
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView()
          el.focus()
        }
      }, 0)
    }
    handleExternalLinks()
  }, [loading])

  return (
    <>
      <Head>
        <title>Vidit Kushwaha</title>
        <meta
          name="description"
          content="I am a third year student pursuing Metallurgical and Materials Engineering @ NIT Rourkela."
        />
        <meta
          name="keywords"
          content="vidit kushwaha, portfolio, viditkushwaha, vidit"
        />
        <meta property="og:title" content="Hi, my name is Vidit Kushwaha" />
        <meta
          property="og:description"
          content="I am a third year student pursuing Metallurgical and Materials Engineering @ NIT Rourkela. I'm always open to new experiences, meeting new people, and learning new things."
        />
        <meta property="og:site_name" content="Vidit Kushwaha" />
        <meta property="og:type" content="website" />
        <meta property="twitter:card" content="summary_large_image"></meta>
        <meta property="twitter:creator" content="@hellovidit"></meta>
        <meta property="twitter:site" content="@hellovidit"></meta>
        <meta property="twitter:title" content="Vidit Kushwaha"></meta>
        <meta
          property="twitter:description"
          content="I am a third year student pursuing Metallurgical and Materials Engineering @ NIT Rourkela."
        ></meta>
        <meta
          property="twitter:url"
          content="https://viditkushwaha.live/"
        ></meta>
        <link rel="canonical" href="https://www.viditkushwaha.live/" />

        <link rel="icon" type="ico" href="icon/icon.ico" />
        <link rel="apple-touch-icon" type="ico" href="icon/icon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="icon/android-chrome-192x192.png"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="192x192"
          href="icon/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="icon/android-chrome-512x512.png"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="512x512"
          href="icon/android-chrome-512x512.png"
        />
        <link rel="icon" type="image/png" href="icon/apple-touch-icon.png" />
        <link
          rel="apple-touch-icon"
          type="image/png"
          href="icon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="16x16"
          href="favicon-16x16.png"
        />
        <link rel="icon" type="ico" href="favicon.ico" />
        <link rel="apple-touch-icon" type="ico" href="favicon.ico" />
        <meta name="theme-color" content="#0a192f" />

        <link rel="manifest" href="manifest.json" />

        {/* CDN  */}
      </Head>

      {loading ? (
        <Splashscreen />
      ) : (
        <div className="bg-primary w-full overflow-hidden text-white">
          <div className={`${style.paddingX} ${style.flexCenter}`}>
            <div className={`${style.boxWidth}`}>
              <Navbar />
            </div>
          </div>
          <Component {...pageProps} />
          <div className={`${style.paddingX} ${style.flexCenter}`}>
            <div className={`${style.boxWidth}`}>
              <Footer />
            </div>
          </div>
        </div>
      )}

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
    </>
  )
}

export default MyApp
