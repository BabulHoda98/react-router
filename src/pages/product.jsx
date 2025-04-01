import React from 'react'
import { useParams } from 'react-router'


const Product = () => {
    const {productName}=useParams();  //{productName: searchParam}
    //normally used to fetch api
  return (
    <main>
        <h1>Single Product :{productName}</h1>

    </main>
  )
}


export default Product