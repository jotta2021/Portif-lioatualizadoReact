import { useRef, useState } from 'react'

import {Link} from 'react-router-dom'
import {FiMenu} from 'react-icons/fi'
import {AiFillCloseSquare} from 'react-icons/ai'
import './header.css'
export default function Header() {



const [ show,setShow] = useState(false)

const toggleMenu = () =>{
 if(show == false){
  setShow(true) 
 }else{
  setShow(false)
 }
}

  return (
    <div className='container'>
      <div className='logo'>
        
        <h2>
          <span>Joandeson </span> Luan
        </h2>
        
      </div> 
       <div className='nav-icon' onClick={toggleMenu}>
       {show ? <i>
        <AiFillCloseSquare size={30} color=' rgba(252,70,107,1)'/>
       </i>:
       <i>   <FiMenu  size={30} color=' rgba(252,70,107,1)'/>  </i>
       } 
            
          </div>
      <div className={`nav-elements ${show && "active"}`} > 
    
        <ul  >
        <Link to='/'>  <li>Home</li> </Link> 

         <Link to='/about'>
         <li>Sobre mim</li>
         </Link> 

          <Link to='/projects'>
          <li>Projetos</li>
          </Link>
          
         
        </ul>
        
      </div>
    </div>
  )
}
