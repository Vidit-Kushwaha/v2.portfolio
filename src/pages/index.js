import style from '../styles/style'
import { Hero, Tabcontainer, Line, Contact } from '../components'
import React from 'react'

export default function Home() {
  return (
    <div className="app">
      <div className={`${style.paddingX} ${style.flexCenter}`}>
        <div className={`${style.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={` ${style.paddingX} ${style.flexCenter} tabwidth`}>
        <Tabcontainer />
      </div>
      <div className={`w-full sm:px-16 px-2 ${style.flexCenter}`}>
        <Line />
      </div>
      <div className={`${style.paddingX} ${style.flexCenter}`}>
        <div className={`${style.boxWidth}`}>
          <Contact />
        </div>
      </div>
    </div>
  )
}
