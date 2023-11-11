import React, { useEffect } from 'react'
import Skills from './Skills'
import Projects from './Projects'

const Line = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('show', entry.isIntersecting)
      })
    })
    const hiddenele = document.querySelectorAll('.start')
    hiddenele.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div className="sm:w-[63%] w-5/6 relative h-parent">
        <div className="sm:pl-6 w-full relative mt-20">
          <Skills />
        </div>
        <div className="sm:pl-6 w-full relative mt-20">
          <Projects />
        </div>
      </div>
    </>
  )
}

export default Line
