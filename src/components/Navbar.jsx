import React, { useState } from 'react'
import { navLinks, resume } from '../constants'
import { menu, close } from '../assets'
import Image from 'next/image'

const Navbar = () => {
  const [active, setActive] = useState('About');
  const [toggle, setToggle] = useState(false)


  return (
    <nav className='w-full flex py-6 justify-between items-center navbar px-3'>
      <div className='font-poppins font-bold text-lg'>
        Vidit Kushwaha
      </div>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"
              } ${index === navLinks.length - 1 ? "mr-10" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
        <li> <a className="resume" href={resume} rel="noopener noreferrer" target="_blank"><button className='custom-button px-3 py-2'>Resume</button></a></li>
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <Image
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${!toggle ? "hidden" : "flex"
            } p-6 bg-[#112240] absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl animate__animated animate__bounceInDown -z-0`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"
                  } ${index === navLinks.length - 1 ? "mb-4" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            <li><button className='custom-button  px-3 py-2'>Resume</button></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
