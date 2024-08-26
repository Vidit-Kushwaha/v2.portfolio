import React from 'react'
import { skills } from '../../config'
import Image from 'next/image'

const Skills = () => {
  return (
    <section className="font-poppins mt-10 sm:ml-6">
      <p className="text-white text-5xl w-full">Skills</p>
      <p className="text-gray-500 leading-normal text-sm w-full pt-4 start">
        Here are some of the technologies I've worked with:
      </p>
      <div
        className="grid grid-cols-3 sm:grid-cols-6 mt-3 items-stretch"
        draggable={false}
      >
        {skills.map((skill, index) => (
          <div
            className={`start flex justify-center rounded-xl my-2 bg-[#112240] sm:p-6 p-2 mx-2`}
            key={skill.id}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <Image
              src={skill}
              alt={`skill icon ${index}`}
              width={50}
              height={50}
              className={`min-w-[50px] h-[50px] cursor-pointer `}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
