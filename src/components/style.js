import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: 'white';

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
    
  }
  @media(max-width: 768px){
    ul{
      gap:2rem;
    }
  }
  @media(max-width:414px){
ul{
  opacity:0;
  visibility:hidden;
}

  }
`
export const Logo = styled.div`
  margin-top: 1rem;

    background: rgb(63,94,251);
    background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: black;

    @media(max-width: 414px){
      margin-left:10rem;
      width:40rem;
    }

`
