import React from 'react'
import { projects } from '../constants'
import { arrow } from '../assets'
import Image from 'next/image'


const Projects = () => {
    return (
        <>
            <section className='font-poppins mt-10 sm:ml-6 relative' id='project'>
                <p className='text-white text-5xl w-full'>Projects</p>
                <ol className='group/list my-5 mt-5 w-full'>
                    {projects.map((project, index) => (
                        <li
                            key={project.id}
                            className='mb-12 w-full start'
                            style={{ transitionDelay: `${index * 300}ms` }}>
                            <div className=" group relative grid pb-1 transition-all sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 w-full">
                                <div className="z-10 sm:col-span-6 w-full">
                                    <h3 className="font-medium leading-snug text-slate-200">
                                        <div>
                                            <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 undefined group/link text-base" href={project.link} target="_blank" rel="noreferrer" aria-label="Creative Technologist Co-op · MullenLowe U.S.">
                                                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block">
                                                </span>
                                                <span>{project.title}
                                                    <span className="inline-block"> <Image src={arrow} alt='arrow' /></span>
                                                </span></a>
                                        </div>
                                    </h3>
                                    <p className="mt-2 text-sm leading-normal text-gray-500 w-full">{project.desc}</p>
                                    <ul className="mt-2 flex flex-wrap">
                                        {
                                            project.stack.map((stac, ind) => {
                                                return <li className='mr-1.5 mt-2' key={ind}>
                                                    <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300' >{stac}</div>
                                                </li>
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </li>
                    ))}
                </ol>
            </section>

        </>
    )
}

export default Projects
