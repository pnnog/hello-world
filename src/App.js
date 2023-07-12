import { BrowserRouter, Route, Routes } from "react-router-dom";

import 'styles/global.css'

import About from "pages/About";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Menu from "components/Menu";
import Footer from "components/Footer";
import Layout from "pages/Layout";

function App() {
  return (
    <BrowserRouter>
      <Menu/>

      <Routes>
        <Route path="/" element={<Layout />}> 
          <Route index element={<Home />}/> 
          <Route path='about' element={<About />}/> 
        </Route>

        <Route path='*' element={<NotFound />}/> 
      </Routes>  

      <Footer />
    </BrowserRouter>
  );
}

export default App;
