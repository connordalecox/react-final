import React from 'react'
import { useCartData } from '../../context/ContextForCart'
import product from '../Product/Product'
import {useParams} from 'react-router-dom'
import './productDetails.css'
import {Link} from 'react-router-dom'
import Header from '../header/Header'
import {NumericFormat} from 'react-number-format'
import { useRef } from 'react'

export default function ProductDetails() {
    const {products, quantity, setQuantity, setCart, cart} = useCartData()
    const {id} = useParams()
    const zeroQuan = useRef(1) 
    const findProduct = products.find(item => item.id == id)
    const quantityHandler = (event) => {
        if (isNaN(event.target.value) || event.target.value.includes('-')) {
            setQuantity(1)
        } else {setQuantity(Number(event.target.value))}

        
    }
    const addedToCart = (itemId) => {
        const locateProduct = cart.find(item => item.id == itemId)
        if (locateProduct === undefined) {
            setCart((lastCart) => {
                return [...lastCart, {itemName:findProduct.title, itemQuantity:quantity, itemPrice:findProduct.price, itemImage:findProduct.image, id:findProduct.id, totalCost:quantity * findProduct.price}]
            })
        } else {
            const addSameItem = cart.map(item => {
                if (item.id == itemId) {
                    return {...item, itemQuantity:item.itemQuantity + quantity, totalCost:item.totalCost + quantity * findProduct.price}
                }
                return item
            })
            setCart(addSameItem)
            setQuantity(1)
        }
    }
  return (
    <div>
        <Header />
        {products.length > 0 && (
            <div className='productDetailsPageContainer'>
                <img src={findProduct.image} className='productDetailsImg'></img>
                <h1 className='productDetailsH1'>{findProduct.title}</h1>
                <p className='productDetailsPrice'>${findProduct.price.toFixed(2)}</p>
                <p className='productDetailsCat'>{findProduct.category}</p>
                <p className='productDetailsDesc'>{findProduct.description}</p>
                <div className='quantDiv'>
                    <label htmlFor='#quantityChoose'>Quantity: </label>
                    <input value={quantity} onChange={(event) => quantityHandler(event)} className='productDetailsInput' id='quantityChoose' ref={zeroQuan}></input>
                </div>
                {Number(zeroQuan.current.value) !== 0 && <button className='productDetailsButton' onClick={() => addedToCart(findProduct.id)}>Add to Cart</button>}
                
            </div>
        )}
        {products.length === 0 && (
            <h1>Loading.....</h1>
        )}
    </div>
  )
}
