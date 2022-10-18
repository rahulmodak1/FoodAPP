import axios from 'axios'
import React from 'react'
import './subCatg.css'
import cartItemInc from '../Redux/action'
import {useDispatch} from 'react-redux'


function SubCatg({ name , image , price , description })// getting props from the Products.js
{
const dispatch = useDispatch()
  const itemData = {
name : name,
image : image ,
price :  price ,
description : description
}

const orderHandler = async() => {
 const postData = await axios.post('http://localhost:3002/cart/add' , itemData)
const cartIncCounter = cartItemInc(itemData);
dispatch(cartIncCounter)
}


  return (
    <div className='subProductPage'>
        <div className='product-container' >
<div className='left'>
<h3 className='name'>{name}</h3>
<p className='price'><i className="fa-sharp fa-solid fa-indian-rupee-sign"></i>  {price}</p>
<p className='desc'>{description}</p>
<button onClick={() => orderHandler()}>Order Now</button>
</div>

    <img src={image} alt="" />

</div><hr />

    </div>
  )
}

export default SubCatg