// components/CustomHead.js

import Head from 'next/head';

const CustomHead = () => (
  <Head>
    {/* Insert the Google Analytics code snippet here */}
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-12W70FFEK3"></script>
    <script dangerouslySetInnerHTML={{
      __html: `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-12W70FFEK3');`
    }} />
  </Head>
);

export default CustomHead;
