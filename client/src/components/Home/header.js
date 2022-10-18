import React, { useEffect } from 'react'
import './header.css'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import {useSelector , useDispatch} from 'react-redux'
import axios from 'axios'

function Header() {
const dispatch = useDispatch()
  // const [cartCount , setCartCount] = useState([])
  const data = useSelector(state => state)
  console.log(data.cartItems)
// useEffect(()=>{
// // setCartCount(data)
// }, [data])
const getCart = async() => {
  const result = await axios.get('http://localhost:3002/cart')
dispatch({type:'FETCH DATA' , payload : result.data});

} 
useEffect(()=>{
  getCart()
}, []) ;

  return (
    <div className='header'>
   <p className='header-text'>Food Ordering Portal</p>
       
        <Link to='/cart'>
        <i className="fa-solid fa-cart-shopping"></i><span>{data.cartItems.length}</span>
</Link>
    </div>
  )
}

export default Header