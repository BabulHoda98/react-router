import React from 'react'
import { Route, Routes } from 'react-router'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </>
  );
};
//pages
const Home=()=>(
  <main>
    <h1>Home Page</h1>
  </main>
);

const About=()=>(
  <main>
    <h1>About  Page</h1>
  </main>

);

const Contact=()=>(
  <main>
    <h1>Contact Page</h1>
  </main>
)

export default App