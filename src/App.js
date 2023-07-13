import { BrowserRouter, Route, Routes } from "react-router-dom";

import 'styles/global.css'

import About from "pages/About";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Menu from "components/Menu";
import Footer from "components/Footer";
import Layout from "pages/Layout";
import Post from "pages/Post";
import ScrollToTop from "components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <Menu/>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Layout />}> 
          <Route index element={<Home />}/> 
          <Route path='about' element={<About />}/> 
        </Route>

        <Route path='post/:id/*' element={<Post />}/> 
        <Route path='*' element={<NotFound />}/> 
      </Routes>  

      <Footer />
    </BrowserRouter>
  );
}

export default App;
