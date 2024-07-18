import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope,} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <div>
    <div className='footer'>
    <div className='f1'>
    <h1><b>GOURMET LIVING</b></h1>
    <p>Consistently delivering the highest quality indulgent delights, in a fun and creative way. Bringing passion, creativity and social responsibility to the creation of a product that people love.</p>
    <img src='https://gourmetliving.com.au/wp-content/uploads/2022/10/logo_hd.webp'></img>
    </div>
    <div className='f2'>
    <h1><b>QUICK LINKS</b></h1>
    <p><a href="">HOME</a></p>
    <p><a href="">BEST SELLER</a></p>
    <p><a href="">HAMPERS</a></p>
    <p><a href="">PRODUCTS</a></p>
    <p><a href="">CONTACT US</a></p>
    </div>
    <div className='f3'>
    <h1><b>GET IN TOUCH</b></h1>
    <FontAwesomeIcon className='ficon' icon={faPhone} /><span className='ficon1'> <b>0427 293 265</b></span><br></br>
    <FontAwesomeIcon className='ficon' icon={faEnvelope} /><span className='ficon1'><b>info@gourmetliving.com.au</b></span>
    <div className='ficon12'>
    <FontAwesomeIcon  icon={faFacebook} />
    <FontAwesomeIcon className='ficon12' icon={faInstagram} />
    </div>
    </div>
    <div className='f4'>
    <img src='https://gourmetliving.com.au/wp-content/uploads/2022/10/payment-removebg-preview.png'></img>
    </div>
    </div>
      
    </div>
  )
}

export default Footer
