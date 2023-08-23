import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: 'white';
@media(max-width:375px){
  width:375px;
overflow-y:hidden;
display:flex;
justify-content:center;
}


`
export const Icon = styled.div`
display:none;
@media(max-width:375px){
  display:flex;
  

}
`
export const Menu = styled.div`
a{
text-decoration:none;
}
  ul {
    margin-top: 1rem;
    display: flex;
    gap: 5rem;
  }
  li {
    list-style: none;
    font-size: 1.2rem;
    cursor: pointer;
    color: #008080;
  }
  li:hover{
    color: #fc466b;
    border-bottom: 2px solid #fc466b;
   transition:0.1s;

  
  }

  @media(max-width: 768px){
    ul{
      gap:2rem;
    }
  }
  @media(max-width:375px){
display:${({show}) => show? 'none' : 'flex'}
  }
  @media(max-width:375px){
ul{
  flex-direction:collumn;
  justify-content:center;
gap: 0.5rem;
background-color:black;



  
}
li{
  font-size:1rem;
flex-direction:collumn;
}
 
`
export const Logo = styled.div`
  margin-top: 1rem;
display:flex;
justify-content:space-between;

    background: rgb(63,94,251);
    background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: black;

    @media(max-width: 375px){
    
     font-size: 0.5rem;
     
 justify-content:space-between;;
align-items:center;
     h2{
 width:20rem;
 
     }
      
    }

`
