import style from '../styles/style'
import { Navbar, Hero, Tabcontainer, Footer, Line, Splashscreen, Contact } from '../components'
import React, { useEffect, useState } from 'react'

export default function Home() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <main>
      <>
        <div className="app">
          {loading ? <Splashscreen /> :

            <div className='bg-primary w-full overflow-hidden text-white'>
              <div className={`${style.paddingX} ${style.flexCenter}`}>
                <div className={`${style.boxWidth}`}> <Navbar />
                </div>
              </div>

              <div className={`${style.paddingX} ${style.flexCenter}`}>
                <div className={`${style.boxWidth}`}> <Hero />
                </div>
              </div>

              <div className={` ${style.paddingX} ${style.flexCenter} tabwidth`}>
                <Tabcontainer />
              </div>

              <div className={`w-full sm:px-16 px-2 ${style.flexCenter}`}>
                <Line />
              </div>

              <div className={`${style.paddingX} ${style.flexCenter}`}>
                <div className={`${style.boxWidth}`}> <Contact /></div>
              </div>

              <div className={`${style.paddingX} ${style.flexCenter}`}>
                <div className={`${style.boxWidth}`}> <Footer />
                </div>
              </div>
            </div>

          }
        </div>
      </>
    </main>
  )
}
