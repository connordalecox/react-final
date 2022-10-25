import React from 'react'
import { useCartData } from '../../context/ContextForCart'

export default function CartPage() {
    const {products, quantity, setQuantity, setCart, cart} = useCartData()
    return (
    <div>
        <h1>Your Cart</h1>
        {cart.map((items, index) => {
            return (
                <div key={index}>
                    <h1>{items.itemName}</h1>
                    <p>{items.itemQuantity}</p>
                    <img src={items.itemImage}></img>
                </div>
            )
        })}
    </div>
  )
}
