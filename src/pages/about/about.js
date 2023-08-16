import React from 'react'

import * as C from './styles'
import Photo from '../../assets/photo.jpg'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
export default function About() {
  return (
    <C.Container>
     
      <C.Info>
        <C.Paragraph> 
          <C.Title><h2>Sobre mim
        </h2> </C.Title>
          <p>
            Olá! Meu nome é Joandeson Luan , e sou um desenvolvedor front-end
            apaixonado por criar experiências digitais incríveis. Tenho um amplo
            conhecimento em ReactJS, React Native, JavaScript, HTML, CSS e
            MySQL, o que me permite desenvolver aplicações web e móveis
            interativas e responsivas.
          </p>
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
        </C.Paragraph>
<C.Image>
   <img src={Photo} />
</C.Image>
       
      </C.Info>

      
    </C.Container>
  )
}
