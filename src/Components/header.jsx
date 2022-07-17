import { Header } from '../Styles/styled'
import { Link } from 'react-router-dom';

export const FixedHeader = () => {
  
  return(
    <Header>
      <h1> Logo </h1>
      <nav>
        <Link to={'#'}> Home </Link>
        <Link to={'#'}> Sobre Mim </Link>
        <Link to={'#'}> Competências </Link>
        <Link to={'#'}> Projetos </Link>
      </nav>
    </Header>
  );
}