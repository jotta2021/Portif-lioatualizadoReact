import React from "react"
import * as C from './styles'
import { useState } from "react"
import { Swiper,SwiperSlide } from "swiper/react"

import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import {FaReact,FaHtml5,FaCss3Alt} from 'react-icons/fa'
import {DiMysql} from 'react-icons/di'
import {IoLogoJavascript} from 'react-icons/io'
export default function Tech(){
    const [project, setProject] = useState([
        {
          id: 1,
          name: 'Dev Filmes',
          desc:'Site criado com react js, se trata de uma biblioteca de filmes, onde é possivel ver informações dos filmes, ter acessoa trailers,além de adicionar ou remover filmes em uma lista de preferências',
          image:'https://github.com/jotta2021/DevFilmes/blob/20236a76e9e785a4e52f1a4118d6aeac1904ab63/devFilmes.png?raw=true',
          git: 'https://github.com/jotta2021/DevFilmes',
          site: 'https://643f1e72adaa3d0087c311be--steady-longma-471e21.netlify.app/'
        },
        {
            id: 2,
            name: 'Weather App',
            desc:'O seguinte aplicativo consiste em monitorar o clima do local do usuário, mostrando, além da temperatura atual, as previsões para os próximos dias.',
            image: 'https://github.com/jotta2021/Weather-api-app/blob/master/Imagem%20do%20WhatsApp%20de%202023-07-29%20%C3%A0(s)%2023.59.19.jpg?raw=true',
            git: 'https://github.com/jotta2021/Weather-api-app',
            site: 'https://github.com/jotta2021/Weather-api-app'
        }
        ,
        {
            id: 3,
            name: 'Portifólio',
            desc:'O seguinte site apresenta um pouco das minhas experiências e projetos com o uso de algumas tecnologias.',
            image: 'https://github.com/jotta2021/Portif-lioatualizadoReact/blob/master/Captura%20de%20tela%202023-08-23%20195703.png?raw=true',
            git: 'https://github.com/jotta2021/Portif-lioatualizadoReact',
            site: 'https://github.com/jotta2021/Portif-lioatualizadoReact'
        },
        {
            id: 3,
            name: 'Teste',
            desc:'O seguinte aplicativo consiste em monitorar o clima do local do usuário, mostrando, além da temperatura atual, as previsões para os próximos dias.',
            image: 'https://github.com/jotta2021/Weather-api-app/blob/master/Imagem%20do%20WhatsApp%20de%202023-07-29%20%C3%A0(s)%2023.59.19.jpg?raw=true',
            git: 'https://github.com/jotta2021/Weather-api-app',
            site: 'https://github.com/jotta2021/Weather-api-app'
        }
      ])
function Render( item){
    return(
    

<SwiperSlide style={{display:"flex",
justifyContent:'center'}} >


    
<C.Tech>
         <C.Info>
                <h2>{item.name}</h2>
            <p>{item.desc}</p>
            
            </C.Info>
          
<C.Button>
      <a href={item.git} target="_blank">
            Github
             </a>
<AiFillGithub size={20} color="white"/>
</C.Button>
   
        
           
        
            <img src={item.image}/>
            
            
        </C.Tech>

</SwiperSlide>
        
    )
}

    return(

<C.Container>
<h2>Projetos</h2>

<C.Projects>
    <Swiper
    slidesPerView={3}
    pagination={{clickable:true}}
    navigation

    >

 
    {

       project.map(item => Render(item) ) 
    }
   </Swiper>
</C.Projects>
<h2>Tecnologias</h2>
<C.Tecnologies>
    <C.Icon>
         <IoLogoJavascript size={24} color='white'/>
    </C.Icon>
   <C.Icon>
    <FaReact size={24} color="white"/>
   </C.Icon>
   <C.Icon>
    <FaHtml5 size={24} color="white"/>
   </C.Icon>
   <C.Icon>
    <FaCss3Alt size={24} color="white"/>
   </C.Icon>
   <C.Icon>
    <DiMysql size={24} color="white"/>
   </C.Icon>
</C.Tecnologies>
</C.Container>

    )




    
}
