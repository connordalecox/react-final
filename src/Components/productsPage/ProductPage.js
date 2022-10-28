import React from 'react'
import { useCartData } from '../../context/ContextForCart'
import Product from '../Product/Product'
import './productsPage.css'
import {Link} from 'react-router-dom'
import Header from '../header/Header'

export default function ProductPage() {
    const {products} = useCartData()
    return (
    <div className='productPage'>
        <Header />
        <div className='titleDiv'>
            <h1 className='titles'>Our Products</h1>
        </div>
        {products.length === 0 && <h1>Loading, Hold Tight</h1>}
        {products.length > 0 && (
            <div className='productItemsContainer'> {products.map((product) => {
                    return <Product key={product.id} product={product}/>
                    }
                )}
            </div>
        )}
    </div>
  )
}
