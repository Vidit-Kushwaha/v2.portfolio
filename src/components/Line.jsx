import React, { useEffect } from 'react'
import { point } from '../assets'
import Skills from './Skills'
import Projects from './Projects'
import Image from 'next/image'


const Line = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('show', entry.isIntersecting);
      });
    });

    const hiddenele = document.querySelectorAll('.start');
    hiddenele.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const parentElement = document.querySelector('.h-parent');
    const childElement = document.querySelector('.h-child');

    const parentHeight = parentElement.clientHeight;
    childElement.style.height = `${parentHeight - 50}px`;
  }, [])
  
  return (
    <>
      <div className='sm:w-[63%] w-5/6 relative h-parent'>
        <div className='sm:block hidden'>
          <div className='line w-[3px] h-child absolute' />
        </div>
        <div className="sm:pl-6 w-full relative mt-20">
          <Image className='absolute w-[16px] mx-0 -left-[6px] mt-[1rem] sm:block hidden' alt='point' src={point} />
          <Skills />
        </div>
        <div className="sm:pl-6 w-full relative mt-20">
          <Image className='absolute w-[16px] mx-0 -left-[6px] mt-[1rem] sm:block hidden' alt='point' src={point} />
          <Projects />
        </div>
      </div>
    </>
  )
}

export default Line