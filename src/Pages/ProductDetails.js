import React from 'react'
import { useParams } from 'react-router-dom'


const ProductDetails = () => {
    const params = useParams();

  return (
    <>
    <center>
        <h2>Product</h2>
        <p>{params.productID}</p>

    </center>
        
    </>
  )
}

export default ProductDetails