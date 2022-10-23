import React from 'react'
import { useCartData } from '../../context/ContextForCart'
import Product from '../Product/Product'

export default function ProductPage() {
    const {products} = useCartData()
    return (
    <>
        {products.length === 0 && <h1>Loading, Hold Tight</h1>}
        {products.length > 0 && (
            <> {products.map((product) => {
                return <Product key={product.id} product={product}/>
                })}
                </>
        )}
    </>
  )
}
