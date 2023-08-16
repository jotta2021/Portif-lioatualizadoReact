import * as C from './style'
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <C.Container>
      <C.Logo>
        <h2>
          <span>Joandeson </span> Luan
        </h2>
      </C.Logo>
      <C.Menu>
        <ul>
        <Link to='/'>  <li>Home</li> </Link> 

         <Link to='/about'>
         <li>Sobre mim</li>
         </Link> 

          <Link to='/projects'>
          <li>Projetos</li>
          </Link>
          <li>Contato</li>
        </ul>
      </C.Menu>
    </C.Container>
  )
}
