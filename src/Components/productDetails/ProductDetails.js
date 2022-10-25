import React from 'react'
import { useCartData } from '../../context/ContextForCart'
import product from '../Product/Product'
import {useParams} from 'react-router-dom'

export default function ProductDetails() {
    const {products, quantity, setQuantity, setCart, cart} = useCartData()
    const {id} = useParams()
    const findProduct = products.find(item => item.id == id)
    const quantityHandler = (event) => {
        setQuantity(event.target.value)
    }
    const addedToCart = (itemId) => {
        const locateProduct = cart.find(item => item.id == itemId)
        if (locateProduct === undefined) {
            setCart((lastCart) => {
                return [...lastCart, {itemName:findProduct.title, itemQuantity:quantity, itemPrice:findProduct.price, itemImage:findProduct.image, id:findProduct.id}]
            })
        } else {
            const addSameItem = cart.map(item => {
                if (item.id == itemId) {
                    return {...item, itemQuantity:item.itemQuantity + quantity}
                }
                return item
            })
            setCart(addSameItem)
            setQuantity(1)
        }
    }
  return (
    <div>
        {products.length > 0 && (
            <div>
                <img src={findProduct.image}></img>
                <h1>{findProduct.title}</h1>
                <p>{findProduct.price}</p>
                <p>{findProduct.catergory}</p>
                <p>{findProduct.description}</p>
                <button onClick={() => addedToCart(findProduct.id)}>Add to Cart</button>
                <input value={quantity} onChange={(event) => quantityHandler(event)}></input>
            </div>
        )}
        {products.length === 0 && (
            <h1>Loading.....</h1>
        )}
    </div>
  )
}
