import React from 'react'
import {Link} from 'react-router-dom'
import './product.css'
export default function product({product}) {
  return (
    <div className='productCard'>
        <Link to={`/products/${product.id}`} className='productCardLink'>
            <div className='imgDiv'><img src={product.image} class="productCardImg"></img></div>
            <h1 className='productCardH1'>{product.title}</h1>
            <p className='productCardP'>${product.price.toFixed(2)}</p>
            
        </Link>
    </div>
  )
}
