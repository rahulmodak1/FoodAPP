import './cart.css'
import axios from 'axios'
import { useState ,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import { cartItemDec , cartItemAllDelete } from '../Redux/action';

function Cart() {
const navigate = useNavigate()
const dispatch = useDispatch()
const [cartData , setData] = useState([])

const getCart = async() => {
    const result = await axios.get('http://localhost:3002/cart')
 setData(result.data);

} 
useEffect(()=>{
    getCart()
}, []) ;


const removeHandler = async(id , element) => {
     await axios.delete(`http://localhost:3002/cart/item/delete/${id}`)
     getCart()
   const cartDecCounter = cartItemDec()
   dispatch(cartDecCounter)
}
    const placeOrderHandler = async() => {
await axios.delete('http://localhost:3002/cart/items/delete')
const allDeleteCartCount = cartItemAllDelete()
console.log(allDeleteCartCount)
 dispatch(allDeleteCartCount)

navigate('/') //to navigate in the home page
    }
    return (
        <div className='subProductPage'>
       {cartData.map((element , i) => {

return <div key={i}>
    <div className='cart-container'>
                <div className='left'>
                    <h3 className='title'>{element.name}</h3>
                    <p className='desc'>{element.description}</p>
                    <p className='price'>Price : {element.price}</p>
                    <button onClick={()=>removeHandler(element._id , element)} >Remove</button>
                </div>
                <img src={element.image} alt={element.name}/>
            </div><hr />
           
</div>
        
       })} 

       <div className='pOrder-btn'>
                <button onClick={()=>placeOrderHandler()}>Place Order</button>
                </div>
        </div>
    )
}

export default Cart