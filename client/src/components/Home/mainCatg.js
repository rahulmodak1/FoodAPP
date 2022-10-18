import React from 'react'
import {Link} from 'react-router-dom'
import './mainCatg.css'

function MainCatg({element}) //getting props from home.js
{
  return (
    <div>
<Link to={`/${element.name}`}>
<div className="item">
   <img src={element.image} alt=""  width='200'/> 
   <p title='name'>{element.name}</p>
</div>
</Link>

    </div>
  )
}

export default MainCatg;