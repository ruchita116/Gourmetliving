import React from 'react';
import 'aos/dist/aos.css';
import { useSelector, useDispatch } from 'react-redux'
import { add } from "../slice/Cartslice"
import './Style.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faLock, faTruck } from '@fortawesome/free-solid-svg-icons';
import { hampers } from '../compo/Datadetails';
import { Link } from 'react-router-dom'

const Home = () => {
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
      <div className="image">
        <img src='https://gourmetliving.com.au/wp-content/uploads/2022/10/slider.webp' alt="Hamper collection" />
        <div className="overlay">
          <h1>WITH ALL NEW</h1>
          <h1>HAMPERS COLLECTION</h1>
        </div>
      </div>

      <div className="grid">
        <div className="grid-container">
          <FontAwesomeIcon icon={faTruck} className='i4' />
          <div className="text">
            <h1>FREE DELIVERY</h1>
            <p>ON/ABOVE $100</p>
          </div>
        </div>

        <div className="grid-container">
          <FontAwesomeIcon icon={faAward} className='i4' />
          <div className="text">
            <h1>BEST SELLING</h1>
            <p>HAMPERS</p>
          </div>
        </div>

        <div className="grid-container">
          <FontAwesomeIcon icon={faLock} className='i4' />
          <div className="text">
            <h1>SECURED</h1>
            <p>SHOPPING SITE</p>
          </div>
        </div>
      </div>

      <div className='selling'><center><b>BEST SELLING HAMPERS</b></center></div>
      <div className="datarow ">
        {hampers.map((demo) => {
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
                    <center> <button className='butt' onClick={() => ADD(demo)}>ADD TO CART</button></center>
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

export default Home
