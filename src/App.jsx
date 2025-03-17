import React from 'react'
import { Route, Routes } from 'react-router'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
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