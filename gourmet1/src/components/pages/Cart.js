import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove, increment, decrement } from "../slice/Cartslice"
import './Style.css';
const Cart = () => {

  let names = useSelector((state) => state.cart)
  let dispatch = useDispatch()

  let REMOVE = (itemId) => {
    dispatch(remove(itemId))

  }
//   let subtotal=0;
//   if(names.length>0){
//     names.forEach((item)=>{
//     subtotal += item.price *item.quantity;
//   });
//   }

  const finaltotal = names.reduce(
    (total, item) => total + item.price * item.quantity, 0);


  let INCR = (itemId) => {
    dispatch(increment(itemId))
  }

  let DECR = (itemId) => {
    dispatch(decrement(itemId))
  }
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(names))
  })
  return (
    <div className='cma'>
    <div className='cmain'>
      <div>

        {names.length === 0 ? <h1>Your cart is empty</h1> : 
        <div className='cartdetails' >
        <h1>Shopping Cart</h1>
      </div>}
        {names.map((item) => {
      
          let total = item.price * item.quantity
          // let finaltotal =total+total
        
          return (
            <>
                <div className='cart1'>
                  <div className="cart-body">
                    <img src={item.image} className="cartimg" alt="..." />
                    <p className="cart-text ">{item.title}</p>
                    <p className="cart-text">${item.price}
                      <br></br>
                     </p>

                    <div className='btnclicks'>
                      <button className="btnclic " onClick={() => DECR(item.id)} >-</button>

                      <p className="cartq">{item.quantity}</p>

                      <button className="btnclick " onClick={() => INCR(item.id)} >+</button>
                    </div>
                    <p className='tocart'>${total}</p>

                    <button className="btnclick1" onClick={() => REMOVE(item.id)}>⨯</button>

                  </div>
                  
                </div>
                <hr></hr>
                
            </>
          )
        })}
      </div>
      <div className='subtotal'>
      {names.length > 0 && ( <h3>SUBTOTAL:<>${finaltotal}</></h3>)
      }  
      </div>

    </div>
    </div>
  )
}

export default Cart