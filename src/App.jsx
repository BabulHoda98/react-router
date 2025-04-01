import React from 'react'
import { Route, Routes } from 'react-router'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import Home from "./pages/home";
// import About from "./pages/about";
// import Contact from "./pages/contact";
// import Product from './pages/product';
import {Home,About,Contact,Product} from "./pages"
const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>

        {/* Dynamig Routing (URL Parameters) */}
        <Route path='/product/:productName' element={<Product/>}/>
      </Routes>
      <Footer/>
    </>
  );
};
//pages
// const Home=()=>(
//   <main>
//     <h1>Home Page</h1>
//   </main>
// );

// const About=()=>(
//   <main>
//     <h1>About  Page</h1>
//   </main>

// );

// const Contact=()=>(
//   <main>
//     <h1>Contact Page</h1>
//   </main>
// )

export default App