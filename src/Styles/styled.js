import styled from 'styled-components'

export const Header = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 2rem;
  background: #000c6b8a;
  backdrop-filter: blur(10px);
  color: #EFEFEF;

  a {
    text-align: center;
    padding: 0.5rem;
    transition: .5s;
    color: #EFEFEF;
  }

  a:hover {
    transition: 1s;
    border-bottom: 2px solid #FF0000;
}
` ;

export const Conteiner_Col = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem;
`;