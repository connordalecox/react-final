import React from 'react'
import { useCartData } from '../../context/ContextForCart'
import {Link} from 'react-router-dom'
import Header from '../header/Header'
import './cartPage.css'

export default function CartPage() {
    const {products, quantity, setQuantity, setCart, cart} = useCartData()
    const cartRemove = (itemId) => {
        setCart(activeCart => {
            return activeCart.filter(idMatch => idMatch.id !== itemId) 
        })
    }  
    return (
    <div>
        <Header />
        <div className='cartPageContainer'>
            <h1 className='title'>Your Cart</h1>
            {cart.map((items, index) => {
                return (
                    <div key={index} className='itemIndvCont'>
                        <div className='imgDiv'>
                            <img src={items.itemImage}></img>
                        </div>
                        <div className='indvDiv'>
                            <h2 className='itemNameCart'>{items.itemName}</h2>
                            <p>Quantity: {items.itemQuantity}</p>
                            {<button onClick={() => cartRemove(items.id)}>Remove</button>}
                        </div>
                    </div>
                )
            })}
            <div className='checkoutBtnDiv'>
                {cart.length > 0 && <button className='checkoutBtn'>
                    <Link to={'/checkout'} className='checkoutLink'>Checkout</Link>
                </button>}
            </div>
            <div className='emptyDiv'>
                {cart.length === 0 && <h1 className='emptyH1'>Your Cart is Empty</h1>}
            </div>
        </div>
    </div>
  )
}
