import React from 'react'
import { plane } from '@/assets'
import Image from 'next/image'
import Link from 'next/link'

const Contact = () => {
  return (
    <section
      className="body-font font-poppins relative sm:my-28 my-20"
      id="contact"
    >
      <div className="container px-5 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <div className="flex justify-center text-gray-500 p-10 ">
            <Image src={plane} className="sm:w-auto w-[50px]" alt="plane" />
          </div>
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            GET IN TOUCH!
          </h1>
          <p className="lg:w-2/3 mx-auto leading-tight text-base text-gray-500">
            Whether you have an idea for a project or just want to chat, feel
            free to shoot me an email!
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-full">
              <Link className="email-link" href="/contact">
                <button className="custom-button py-4 px-8 text-lg">
                  Say Hello
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
