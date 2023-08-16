import React from 'react'
import { useState } from 'react'
import * as C from './styles'

export default function Projects() {
  const [project, setProject] = useState([
    {
      id: 1,
      name: 'Dev Filmes',
      image: './assets/devFilmes.png',
      git: 'https://github.com/jotta2021/DevFilmes',
      site: 'https://643f1e72adaa3d0087c311be--steady-longma-471e21.netlify.app/'
    }
  ])
  return (
    <C.Container>
      <C.Title>Principais Projetos</C.Title>
      <C.Projects>
        <C.Project>{project.map(item => Informations(item))}</C.Project>
      </C.Projects>
    </C.Container>
  )
  function Informations(item) {
    return (
      <div>
        <image src={item.image} />
        <h3>{item.name}</h3>
        <a href={item.git}>Github</a>
        <a href={item.site}>Deploy</a>
      </div>
    )
  }
}
