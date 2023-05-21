import React, { useEffect, useState } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { navDelay, loaderDelay,collage } from '../constants'
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';

const Hero = () => {

  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = (
    <span className=" sm:text-sm  md:text-lg  mb-1 md:mb-4 font-medium text-teal-300">Hi,  my name is
    </span>
  );
  const two = (
    <span className=" md:text-6xl text-[26px] mb-1 sm:text-5xl md:mb-4 font-semibold text-gray-300">Vidit Kushwaha.
    </span>
  );
  const three = (
    <span className=" md:text-6xl text-[26px] mb-3 sm:text-5xl md:mb-4 font-semibold text-gray-400">I build things for the web.
    </span>
  )
  const four = (
    <p className="my-4 leading-tight sm:w-[40vw] sm:text-sm  md:text-lg text-gray-500">I'm a second year student pursuing Metallurgical and Materials Engineering <a href={collage} target='_blank'><span className='text-teal-300'>@NIT Rourkela.</span></a> I'm always open to new experiences, meeting new people, and learning new things.</p>
  );

  const items = [one, two, three, four];

  return (
    <>
      <section className="body-font font-poppins min-h-[450px] md:w-[65vw] h-[80vh] mx-auto" id="about">
        <div className="container  flex px-5 py-24 md:flex-row flex-col items-center ">
          <div className="flex flex-col sm:leading-tight md:leading-relaxed ">

            {prefersReducedMotion ? (
              <>
                {items.map((item, i) => (
                  <div key={i}>{item}</div>
                ))}
              </>
            ) : (
              <TransitionGroup component={null} >
                {isMounted &&
                  items.map((item, i) => (
                    <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                      <div style={{ transitionDelay: `${i + 2}00ms` }}>{item}</div>
                    </CSSTransition>
                  ))}
              </TransitionGroup>
            )}

          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
