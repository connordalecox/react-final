import React, { useEffect } from 'react'
import { useCartData } from '../../context/ContextForCart'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Header from '../header/Header'
import './checkoutPage.css'

export default function CheckoutPage() {
    const {products, quantity, setQuantity, setCart, cart} = useCartData()
    const usesNavigate = useNavigate()
    const [endCost, setEndCost] = useState({finalCost:0})
    const totalCost = () => {
        if (cart.length === 0) return
        const costTotal = []
        for (let item of cart) {
            costTotal.push(item.totalCost)
        }
        const singleTotal = costTotal.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
        setEndCost({finalCost:singleTotal})
    }
    const orderSubmit = (event) => {
        event.preventDefault()
        alert('Order Submitted! Thanks!')
        setCart([])
        usesNavigate('/')
    }
    useEffect(() => {
        totalCost()
    }, [])
    return (
    <div className='masterDiv'>
        <Header />
        <div className='checkoutPageDiv'>
            {cart.map((items, index) => {
                return (
                    <div key={index} className='checkoutItems'>
                        <div className='checkoutImgDiv'>
                            <img src={items.itemImage} className='checkoutImg'></img>
                        </div>
                        <div className='checkoutInfoDiv'>
                            <h2>{items.itemName}</h2>
                            <p>Quantity: {items.itemQuantity}</p>
                            <p>${items.itemPrice}</p>
                        </div>
                    </div>
                )
            })}
        </div>
        <div>
            <h1>Total Cost: ${endCost.finalCost.toFixed(2)}</h1>
        </div>
        <div className='formDiv'>
            <h2>Your Info</h2>
            <form on onSubmit={(event) => orderSubmit(event)}>
                <div className='nameDiv'>
                    <label htmlFor='#name'>Full Name   </label>
                    <input placeholder='Name' id='name'></input>
                </div>
                {/* Shipping Address */}
                <div className='ship'>
                    <label htmlFor='#StreetAddress'>Shipping Address</label>
                    <input placeholder='Street Address' id='StreetAddress' className='street'></input>
                    <input placeholder='City' className='city'></input>
                    <input placeholder='State' className='state'></input>
                    <input placeholder='Zip Code' className='zip'></input>
                </div>
                {/* Billing Address */}
                <div className='bill'>
                    <label htmlFor='#BillingAddress'>Billing Address</label>
                    <input placeholder='Street Address' id='BillingAddress' className='street'></input>
                    <input placeholder='City' className='city'></input>
                    <input placeholder='State' className='state'></input>
                    <input placeholder='Zip Code' className='zip'></input>
                </div>
                {/* Card Info */}
                <div className='card'>
                    <label htmlFor='#CardNum'>Card Info</label>
                    <input placeholder='Cardholder Name' id='CardNum' className='name'></input>
                    <input placeholder='Card Number' className='cardNumber'></input>
                    <input placeholder='Experation' className='exp'></input>
                    <input placeholder='Security Code' className='security'></input>
                </div>
                <input type='submit' className='submitBtn'></input>
            </form>
        </div>
    </div>
  )
}
