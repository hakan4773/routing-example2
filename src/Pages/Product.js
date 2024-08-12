import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {   useParams,NavLink } from 'react-router-dom';
function Product() {
    const [product,SetProducts]=useState({})
    const {id} = useParams()
    useEffect(()=>{
axios(`https://jsonplaceholder.typicode.com/photos/${id}`)
 .then((res)=>SetProducts(res.data)).catch((e)=>console.log(e))


    },[id])
  return (
    <div>




<div className='product-list'>

<div className='product-card'>
<div className="product-info">
<img src={`${product.url}`} className='product-image'></img>

<h2>{product.id}</h2>
<p>{product.title}</p>


</div>


</div>

</div>
<NavLink to={`/Product/${parseInt(id) +1}`}>Next Product ({parseInt(id) +1})
</NavLink>
    </div>
  )
}

export default Product
