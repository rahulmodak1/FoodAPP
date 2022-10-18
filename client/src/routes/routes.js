import React from 'react'
import { useState ,useEffect } from 'react'
import axios from 'axios'
import {Routes , Route} from 'react-router-dom'
import SubProducts from '../components/subCatg/products'
import Home from '../components/Home/home'
import Cart from '../components/cart/cart'
// import Pizza from '../components/subProducts/pizza'


function RouterF() {
  const [data , setData] = useState([])


  const getData = async() => {
      const ProductData = await axios.get('http://localhost:3002/items')
  setData(ProductData.data[0].items)
  }
  console.log(data)
  useEffect(()=> {
    getData()
  } ,[])
  
  return (
    <div>
  <Routes>
    <Route path='/' element={<Home data={data}/>} />
    <Route path='/:subCategory' element={<SubProducts data = {data}/>}/>
    <Route path='/cart' element={<Cart/>} />
  </Routes>
 

    </div>
  )
}

export default RouterF