import React from 'react'
import { Link } from 'react-router'

const Home = () => {
  return (
    <main>
        <h1>Home</h1>
        <Link to="/product/iphone-15">Product iPhone 15</Link>
        <br/>
        <Link to="/product/pixel-9">Product Pixel 9</Link>
        
        </main>
  )
}

export default Home