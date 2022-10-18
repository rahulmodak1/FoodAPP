import React, { useEffect } from 'react'
import SubCatg from './subCatg'
import { useState } from 'react'
import './Products.css'
import { useParams } from 'react-router-dom'


function SubProducts({data}) {
const [subItems , setSubItems] = useState([])
const {subCategory} = useParams()

useEffect(() => {
if(subCategory === 'Pizza'){
  setSubItems(data[0].subItemsData.subItems)
}else{
  setSubItems(data[1].subItemsData.subItems)
}
} ,[data])
console.log(data)
  return (
    <div>
    <h1 style={{textAlign: 'center'}}>{subCategory}</h1>
    <hr />

    {subItems.map((subData, index) => {
        return  <SubCatg key={index}  name={subData.name} image={subData.image}  price={subData.price} description={subData.description}/>
      })
    }

    </div>
  )
}

export default SubProducts