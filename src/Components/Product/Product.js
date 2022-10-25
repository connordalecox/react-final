import React from 'react'
import {Link} from 'react-router-dom'
export default function product({product}) {
  return (
    <div>
        <Link to={`/products/${product.id}`}>
            <h1>{product.title}</h1>
            <p>${product.price}</p>
            <img src={product.image}></img>
        </Link>
    </div>
  )
}
