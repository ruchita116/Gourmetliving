import React from 'react'
import "./Style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope,faCaretDown,faCartShopping,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
      <div className='head1'>
        <div className='icon'>
          <FontAwesomeIcon icon={faPhone} /><a href=""><span className='ic'><b>0427 293 265</b></span></a>
          <FontAwesomeIcon className='envelop' icon={faEnvelope} />
          <a href=""><span className='ic'><b>info@gourmetliving.com.au</b></span>  </a>
          <span className='support'><b>SUPPORTING LOCAL AUSTRALIAN PRODUCERS</b></span>
        </div>
      </div>
    <div className='logo'>
      <img src='https://gourmetliving.com.au/wp-content/uploads/2022/10/logo-web-1.webp'/> 
      </div>
      <div className='navbar'>
      <ul>
      <li><Link to="/" ><a href="/" >HOME</a></Link></li>
      <li><Link to="Bestseller"><a href='Bestseller'>BEST SELLER</a></Link></li>
      <li><Link to=""><a href='#'>HAMPERS</a>     <FontAwesomeIcon icon={faCaretDown} /></Link> 
</li>
      <li><Link to=""><a href="#">PRODUCTS</a> <FontAwesomeIcon icon={faCaretDown} /></Link></li>
      <li><Link to="Contactus"><a href="Contactus">CONTACT US</a></Link></li>
      <Link to="Cart"><FontAwesomeIcon icon={faCartShopping} className='i2' /></Link>
     <a href='#'> <FontAwesomeIcon icon={faMagnifyingGlass} className='i3' /></a>
     </ul>
     
      </div>
    </div>


  )
}

export default Navbar