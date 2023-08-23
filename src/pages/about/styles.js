import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;

  a {
    text-decoration: none;
    color: black;
  }
  @media (max-width: 768px){
   img{
    width:15rem;
   }
   }
 
 
`

export const Title = styled.h2`
h2{
  text-align: center;
  font-size: 1.7rem;
  margin-bottom:1rem;
 
}
  
 
`
export const Info = styled.div`
  
  display: flex;
  flex-direction:collum;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  width: 70%
  margin-left:center

  @media (max-width:768px){
display:none;

   
  }
  
`
export const Image = styled.div`

img {
  max-width:25rem;
   border-radius: 1rem;
  border:none;

 }

`
export const Paragraph = styled.div`
  width: 30rem;
`
export const Icons = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
`
export const Icon = styled.div`
font-size: 1rem;
width: 8rem;
margin-top: 1rem;
border-radius: 0.5rem;
border: none;
background: rgb(63,94,251);
background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);
color: black;
color: white;
height: 2rem;
display:flex;
gap:0.2rem;
justify-content:center;
align-items:center;
cursor:pointer;

:hover {
    transition: 0.2s;
    background: rgba(252,70,107,1);
    box-shadow: 1px 2px 9px rgba(252,70,107,1)
  }
`
