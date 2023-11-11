import React, { useEffect } from 'react'
import styled from 'styled-components'
import { content } from '../../config'
import { play, profile } from '../assets'
import Image from 'next/image'

const Pink = styled.div`
  color: rgb(236 72 153);
  display: inline-block;
`
const Blue = styled.div`
  color: rgb(59 130 246);
  display: inline-block;
`

const Tabcontainer = () => {
  useEffect(() => {
    const parentElement = document.querySelector('.h-imgt')
    const childElement = document.querySelector('.h-img')
    const childElement2 = document.querySelector('.slat')

    const parentHeight = parentElement.clientHeight
    childElement.style.height = `${parentHeight - 100}px`
    childElement2.style.height = `${parentHeight - 100}px`
  }, [])

  const clickPlay = () => {
    document.getElementById('playbutton').classList.toggle('md:flex')
    setTimeout(() => {
      document.getElementById('playbutton').classList.toggle('md:flex')
    }, 4500)
  }

  return (
    <>
      <div className="rounded-[10px] bg-[#252525] md:w-2/3 w-full relative h-imgt">
        <tab-container>
          <div className="tabnav mb-0 px-2">
            <nav
              className="tabnav-tabs flex justify-between px-2"
              role="tablist"
              aria-label="Code editor"
            >
              <button
                name="button"
                className="p-2"
                type="button"
                role="tab"
                aria-selected="true"
                tabIndex="0"
              >
                <span>Javascript</span>
              </button>
              <button
                name="button"
                className="p-2 transition duration-300 hover:scale-125 cursor-pointer z-10"
                type="button"
                role="tab"
                aria-selected="true"
                tabIndex="0"
              >
                <span>
                  <Image src={play} alt="play button" onClick={clickPlay} />
                </span>
              </button>
            </nav>
          </div>

          <div
            role="tabpanel "
            className="code-editor-component"
            aria-labelledby="runtime-go"
          >
            <div className="flex py-3">
              <div className="select-none text-gray-500 pl-2">
                {content.map((line, index) => (
                  <div className="pr-2" key={index}>
                    {index + 1}
                  </div>
                ))}
              </div>
              <div
                className="flex-1 overflow-x-auto text-gray-300"
                tabIndex="0"
              >
                <pre className="f4">
                  <span className="code-editor inline-block">
                    <Pink>import </Pink>React <Pink>from </Pink>'react'
                  </span>
                </pre>
                <pre className="f4">
                  <span className="code-editor inline-block">
                    <Pink>import </Pink>profile <Pink>from </Pink>
                    './assets/profile.jpeg'
                  </span>
                </pre>
                <pre className="f4">
                  <span className="code-editor inline-block"></span>
                </pre>
                <pre className="f4">
                  <span className="code-editor inline-block"></span>
                  <Blue>const </Blue> Image = () =&gt; &#123;
                </pre>
                <pre className="f4">
                  <span className="code-editor inline-block"></span>
                </pre>
                <pre className="f4">
                  <span className="code-editor inline-block">&lt;img</span>
                </pre>
                <pre className="f4">
                  <span className="code-editor inline-block">
                    {' '}
                    <Blue>className</Blue>='w-[16px] h-[16px] block
                    cursor-pointer'
                  </span>
                </pre>
                <pre className="f4">
                  <span className="code-editor inline-block">
                    {' '}
                    <Blue>alt</Blue>='profile picture'
                  </span>
                </pre>
                <pre className="f4">
                  <span className="code-editor inline-block">
                    {' '}
                    <Blue>src</Blue>=&#123;profile&#125;
                  </span>
                </pre>
                <pre className="f4">
                  <span className="code-editor inline-block">
                    {' '}
                    <Blue>decoding</Blue>='async'
                  </span>
                </pre>
                <pre className="f4">
                  <span className="code-editor inline-block">/&#62;</span>
                </pre>
                <pre className="f4">
                  <span className="code-editor inline-block"></span>
                </pre>
                <pre className="f4">
                  <span className="code-editor inline-block">&#125;</span>
                </pre>
                <pre className="f4">
                  <span className="code-editor inline-block">
                    <Pink>export default</Pink> Image
                  </span>
                </pre>
              </div>
            </div>
          </div>
        </tab-container>
        <div
          className="w-full top-0 h-auto absolute profile items-center hidden"
          id="playbutton"
        >
          <div className="rounded-lg md:h-60 aspect-[1/1] absolute bg-teal-300 hover:hidden transition duration-300 opacity-50 slat"></div>
          <Image
            className="object-cover object-center rounded-lg  h-img aspect-[1/1] custom-img img-wid"
            alt="hero"
            src={profile}
            fetchpriority="high"
          />
        </div>
      </div>
    </>
  )
}

export default Tabcontainer
