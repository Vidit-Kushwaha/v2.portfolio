import React from 'react'
import { projects } from '../../config'
import { arrow, github2 } from '../assets'
import Image from 'next/image'

const Projects = () => {
  return (
    <>
      <section className="font-poppins mt-10 sm:ml-6 relative" id="project">
        <p className="text-white text-5xl w-full p-2">Projects</p>
        <ol className="group/list my-5 mt-5 w-full lg:grid lg:grid-cols-2 gap-2 sm:flex">
          {projects.map((project, index) => (
            <li
              key={project.id}
              className="mb-12 max-w-[600px] start backdrop-blur-0 bg-[#112240] rounded-xl shadow-lg p-6 sm:p-8 sm:col-span-6"
              style={{ transitionDelay: `${index * 300}ms` }}
            >
              <a
                className=" group relative grid pb-1 transition-all sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 w-full"
                href={project.external ? project.external : project.github}
                target="_blank"
                rel="noreferrer"
              >
                <div className="z-10 sm:col-span-6 w-full">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                      <div className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 undefined group/link text-base w-full">
                        <div className="flex justify-between w-full">
                          <div>{project.title}</div>
                          <div className="px-2">
                            <Image
                              src={project.github ? github2 : arrow}
                              className="text-white"
                              alt={project.github ? 'github_link' : 'Link'}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-gray-500 w-full">
                    {project.desc}
                  </p>
                  <ul className="mt-2 flex flex-wrap">
                    {project.stack.map((stac, ind) => {
                      return (
                        <li className="mr-1.5 mt-2" key={ind}>
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                            {stac}
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </a>
            </li>
          ))}
        </ol>
      </section>
    </>
  )
}

export default Projects
