import React from 'react'
import Card from 'react-bootstrap/Card';
import Products from '../subCatg/products';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import './home.css'
import MainCatg from './mainCatg';
 


function Home({data}) //getting props from routes.js
 {
  


  return (
    <div>
    <div className='main-catg'>
{data.map((element,i) =>{
  return <div key={i} className=''> 

 <MainCatg element={element} />

  </div>
})}
    </div>
    </div>
  )
}

export default Home