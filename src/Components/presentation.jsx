import { Conteiner_Col } from '../Styles/styled';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

import '../Styles/presentation.scss';

export const Presentation = () => {
  
  return (
    <Conteiner_Col>
      <div className='card--presentation'>
        <p>Hi, my name is</p>
        <div>
          <h1 className='tracking--effect'> Allysson Ferreira </h1>
        </div>
        <p>i'm a Fullstack Software Engineer</p>
      </div>
      <div className='social-media'>
        <a href={'https://github.com/AllyssonLFerreira'} target='_blank' className='effect--background'> 
          <FaGithub/> 
          <p> Github </p> 
        </a>
        <a href={'https://www.linkedin.com/in/allyssonferreira/'} target='_blank' className='effect--background'> 
          <FaLinkedinIn/> 
          <p> Linkedin </p> 
        </a>
      </div>
    </Conteiner_Col>
  )
};