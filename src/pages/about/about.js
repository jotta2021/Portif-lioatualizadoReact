import React from 'react'

import * as C from './styles'
import Photo from '../../assets/photo.jpg'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import './about.css'
export default function About() {
  return (
    <div className='about'>
     
      <div className="info">
        <div className="paragraph"> 
          <h2 className="title">Sobre mim
        </h2> 
          <p>
            Olá! Meu nome é Joandeson Luan , e sou um desenvolvedor front-end
            apaixonado por criar experiências digitais incríveis. Tenho um amplo
            conhecimento em ReactJS, React Native, JavaScript, HTML, CSS e
            MySQL, o que me permite desenvolver aplicações web e móveis
            interativas e responsivas.
          </p>
          <div className="icon-socials">
            <a
              href="https://github.com/jotta2021"
              target="_blank"
              rel="noreferrer"
            >
              <div className="icon-social">
                <AiFillGithub size={24} color="white" />
                <p>Github</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/joanderson-luan-santos-0a187a252/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="icon-social">
                <AiFillLinkedin size={24} color="white" />
                <p>Linkedin</p>
              </div>{' '}
            </a>
          </div>
        </div>
<div className="image">
   <img src={Photo} />
</div>
       
      </div>

      
    </div>
  )
}
