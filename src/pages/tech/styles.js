import { styled } from "styled-components";


export const Container = styled.div`
background-color:#000000;
display:flex;
flex-direction:column;


height: 100vh;

h2{
    color:white;
    text-align:center;
   margin-top:2rem;

}
`
export const Tech = styled.div`
display:flex;
align-items:center;
margin-left:2rem;
align-items:center;
margin-top: 2rem;
margin-bottom:2rem;
justify-content:center;
width:15rem;
 height:23rem;
 background-color:black;
 border: 3px solid transparent;
 border-image: linear-gradient(to right, rgba(252,70,107,1), rgb(63,94,251));
 border-image-slice: 1;

display:flex;
flex-direction:column;



img{
    cursor:pointer;
    object-fit:cover;
    max-width:12rem;
    max-height: 8rem;
    min-width: 12rem;
    min-height:8rem;
    border-radius:1rem;
 

    
},

`
export const Info = styled.div`

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

 
p{
    font-weight: 200;
 color:white;
    width: 12rem;
    height: 5rem;
  flex-wrap:wrap;
    font-size: 0.8rem;
    margin-bottom:2.5rem;
}
`

export const Button = styled.div`
margin-bottom:0.5rem;
width: 10rem;
height: 1.5rem;
font-size: 1rem;
margin-top: 1rem;
border-radius: 0.5rem;
border: none;
background: rgba(252,70,107,1);
    box-shadow: 1px 2px 9px rgba(252,70,107,1)
cursor:pointer;
justify-content:center;
align-items:center;
display:flex;
gap:0.5rem;
a{
    color:white;
    text-decoration:none;
}


`
export const Projects = styled.div`



`
export const Tecnologies = styled.div`

display:flex;
justify-content:center;
gap:2rem;

`
export const Icon = styled.div`
background: rgb(63,94,251);
    background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);
    color: black;
width:4em;
height:4rem;
border-radius:0.5rem;
justify-content:center;
align-items:center;
display:flex;
margin-top:1rem;
cursor:pointer;

`