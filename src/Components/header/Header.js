import React from 'react'
import {Link} from 'react-router-dom'
import './header.css'

export default function Header() {
  return (
      <div className='headerContainer'>
          <Link to={'/'}><i class="fa-solid fa-house"></i></Link>
          <h1>Cool Stuff Store</h1>
          <Link to={'/cart'}><i class="fa-solid fa-cart-shopping"></i></Link>
      </div>
    
  )
}
