import React from 'react'
import { socialMedia, repo } from '../../config'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="text-gray-600 font-poppins">
      <div className="text-gray-500 max-w-md  mx-auto">
        <p className="leading-relaxed text-center text-[1rem] sm:text-[0.8rem] text-xs">
          {' '}
          Designed in paper and coded in VS Code by yours truly. Built with
          Next.js and Tailwind CSS, deployed with Digitalocean.
        </p>
      </div>

      <div className="container py-8 mx-auto flex items-center justify-between sm:flex-row flex-col">
        <p className="text-md sm:ml-4 sm:block hidden sm:py-2 sm:mt-0 mt-4">
          Build by
          <a
            href={repo}
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            Vidit kushwaha
          </a>
        </p>

        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <Image
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[16px] h-[16px] block cursor-pointer ${
                index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'
              }`}
              onClick={() => window.open(social.link)}
            />
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
