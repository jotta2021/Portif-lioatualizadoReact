import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { IoIosArrowDroprightCircle } from 'react-icons/io'


import { Link } from 'react-router-dom'
import './home.css'
export default function Home() {
  return (
    <div className='home'>
      <h1 className='name'>Joanderson Luan</h1>
      <h2 className='prof'> Frontend Developer</h2>
<Link to='/about'>


      <button>
        Sobre mim
      
           <IoIosArrowDroprightCircle size={20} />
        
       
      </button>
      </Link>
      <div className='icons'>
            <a
              href="https://github.com/jotta2021"
              target="_blank"
              rel="noreferrer"
            >
              <div className='icon'>
                <AiFillGithub size={24} color="white" />
                <p>Github</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/joanderson-luan-santos-0a187a252/"
              target="_blank"
              rel="noreferrer"
            >
              <div className='icon'>
                <AiFillLinkedin size={24} color="white" />
                <p>Linkedin</p>
              </div>
            </a>
          </div>
         
    </div>
  )
}
