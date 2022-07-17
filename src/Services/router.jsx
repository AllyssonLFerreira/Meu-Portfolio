import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Teste } from '../Components/test';

import { Home } from '../Pages/Home/Home'


export const Router = () => {
  return(
    <BrowserRouter>
      <Routes>
          <Route exact path='/' element={ <Home /> } />
          <Route path='/teste' element={ <Teste /> } />
      </Routes>
    </BrowserRouter>
  );
}