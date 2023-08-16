import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
margin-top: -2rem;
  height: 100vh;

  h1 {
    font-size: 4rem;
  }
  h2 {
    background: rgb(63,94,251);
    background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);
    bacground-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: black;
    font-size: 2rem;
  }
  button {
    font-size: 1.5rem;
    width: 15rem;
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
    
 
  }
  button:hover{
    transition: 0.2s;
    background: rgba(252,70,107,1);
    box-shadow: 1px 2px 9px rgba(252,70,107,1)
  }

  @media(max-width:414px){
    h1{
      flex-wrap:nowrap;
    font-size:2rem;
    }
    h2{
      font-size:1.5rem;
    }
    button{
      font-size: 1rem;
      width: 10rem;
    }
  }

`
export const Icons = styled.div`


  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;width:15rem;
  a{
    text-decoration:none;
    font-size: 0.8rem;
  }
`
export const Icon = styled.div`
  cursor: pointer;
  display: flex;
  gap: 0.5rem;
  align-items: center;
    border-radius: 0.5rem;
  width: 5rem;
  background-color: grey;
  color:white;
  opacity:0.7;
 

 
`
