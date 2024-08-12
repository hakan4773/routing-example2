import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom';
function Products() {
const [product,SetProduct]=useState([])



useEffect(()=>{
  axios("https://jsonplaceholder.typicode.com/photos?_limit=10")
      .then((res)=>SetProduct(res.data))
    .catch((err) => console.error('Error fetching data:', err))
   
},[])


  return (
    <div className="products-container">
    <h1>Our Products</h1>
    <div className="products-list">
      {product.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.url} alt={product.title} className="product-image" />
        

          <div className="product-info">
            <h2>{product.title}</h2>
            <p>Urun No: {product.id}</p>
            <NavLink to={`/product/${product.id}`}
            >Satın Al</NavLink>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Products
