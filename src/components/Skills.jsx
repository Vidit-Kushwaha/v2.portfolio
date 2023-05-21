import React from 'react'
import { skills } from '../constants'
import Image from 'next/image'


const Skills = () => {

    return (
        <section className='font-poppins mt-10 sm:ml-6'>
            <p className='text-white text-5xl w-full'>Skills</p>
            <p className='text-gray-500 leading-normal text-sm w-full pt-4 start'>
                Proficient in HTML, CSS, React.js, and Node.js, with expertise in building responsive websites, user-friendly interfaces, and robust back-end functionality. Passionate about crafting seamless web experiences and continuously expanding skills in these technologies.</p>
            <div className="grid grid-cols-2 sm:flex mt-3">
                {skills.map((skill, index) => (
                    <div className={`start flex justify-center rounded-xl my-2 bg-[#24292f] sm:p-6 p-2 ${index !== skill.length - 1 ? "mr-6" : "mr-0"} `}
                        key={skill.id}
                        style={{ transitionDelay: `${index * 300}ms` }}
                    >
                        <Image
                            src={skill.icon}
                            alt={skill.id}
                            className={`min-w-[50px] h-[50px] cursor-pointer `}
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills
