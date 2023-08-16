import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { IoIosArrowDroprightCircle } from 'react-icons/io'

import * as C from './styles'
export default function Home() {
  return (
    <C.Container>
      <h1>Joanderson Luan</h1>
      <h2> Frontend Developer</h2>

      <button>
        Sobre mim
      
           <IoIosArrowDroprightCircle size={20} />
        
       
      </button>
      <C.Icons>
            <a
              href="https://github.com/jotta2021"
              target="_blank"
              rel="noreferrer"
            >
              <C.Icon>
                <AiFillGithub size={24} color="white" />
                <p>Github</p>
              </C.Icon>
            </a>

            <a
              href="https://www.linkedin.com/in/joanderson-luan-santos-0a187a252/"
              target="_blank"
              rel="noreferrer"
            >
              <C.Icon>
                <AiFillLinkedin size={24} color="white" />
                <p>Linkedin</p>
              </C.Icon>{' '}
            </a>
          </C.Icons>
    </C.Container>
  )
}
