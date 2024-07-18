import React from 'react'
import { bestseller } from '../compo/Datadetails'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { add } from "../slice/Cartslice"


const Bestseller = () => {
  let names = useSelector((state) => state.cart)
  let dispatch = useDispatch()

  let ADD = (demo) => {
    // dispatch(add(demo))

    let numm = names.find((totalitem) => totalitem.id === demo.id)
    if (!numm) {
      dispatch(add(demo))
    }
    else {
      alert("product succesfully added in cart..🤩")
    }

  }
  return (
    <div>
    <div className='selling'><center><b>BEST SELLING HAMPERS</b></center></div>
    <div className="datarow ">
      {bestseller.map((demo) => {
        return (
          <div className='card-container'>
              <div className="card-grid">

                <div class="card">
                  <Link to={`demo/${demo.id}`}>
            
                    <div class="discount-badge">
                    <h4>OUT OF STOCK</h4></div>
                    <img src={demo.image} />
                 
                  </Link>
                  <div class="card-content">
                    <h3>{demo.title}</h3>
                    <p>${demo.price}</p>
                    <div className='butt1'>
                    <button className='butt' onClick={() => ADD(demo)}>ADD TO CART</button>
                    </div>
                  </div>
                </div>

              </div>
             
            </div>
        )}
      )}
          </div>
    </div>
  )
}

export default Bestseller
