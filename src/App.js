import { BrowserRouter, Route, Routes } from "react-router-dom";

import 'styles/global.css'

import About from "pages/About";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Menu from "components/Menu";
import Banner from "components/Banner";

function App() {
  return (
    <>
    <BrowserRouter>
      <Menu/>
      <Banner />
      
      <Routes>
        <Route path='/' element={<Home />}/> 
        <Route path='/about' element={<About />}/> 
        <Route path='*' element={<NotFound />}/> 
      </Routes>  
    </BrowserRouter>
    
    </>
  );
}

export default App;
