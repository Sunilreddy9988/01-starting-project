import React from 'react'
import { Link } from 'react-router-dom'

const PRODUCTS = [
    {id:'p1', title: 'product1'},
    {id:'p2', title: 'product2'},
    {id:'p3', title: 'product3'}
]
const Products = () => {
    
  return (
    <>
    {PRODUCTS.map((prod) =>
        <li key={prod.id}>
            <Link to={`/products/${prod.id}`}>{prod.title}</Link>
        </li>
     )}
    </>
  )
}

export default Products