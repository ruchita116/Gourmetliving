import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Contactus = () => {
    return (
        <div>
            <div className='cicon'>
                <div className='c1'>
                    <FontAwesomeIcon icon={faPhone} className='ci' /><br></br><br></br>
                    <h2>PHONE</h2><br></br>
                    <p>Gourmet Living Office</p>
                    <p>0427 293 265</p>
                </div>
                <div className='c2'>
                    <FontAwesomeIcon icon={faLocationDot} className='ci' /><br></br><br></br>
                    <h2>ADDRESS</h2><br></br>
                    <p>633 Waterdale Road</p>
                    <p> Heidelberg West</p>
                    <p> Vic – 3081</p>
                </div>
                <div className='c3'>
                    <FontAwesomeIcon icon={faEnvelope} className='ci' /><br></br><br></br>
                    <h2>EMAIL</h2><br></br>
                    <p>info@gourmetliving.com.au</p>
                </div>
            </div>
            <br></br><br></br><br></br>
            <br></br><br></br>
            <h1>CONTACT US</h1>
            <div className='conus'>
                <img src='https://gourmetliving.com.au/wp-content/uploads/2022/10/santa-pulled-by-reindeer.webp' className='ci1' />
                <div className='con'>

                    <br></br>
                    <br></br><br></br>
                    <form>
                        <h3>Name*</h3>
                        <div className='cfl'>
                            <input type="text" /> <input type="text" /><br></br>
                        </div>
                        <lable for="">First</lable>  <lable className='lastlable' >last</lable>
                        <br></br>
                        <br></br>

                        <h3>Email*</h3>
                        <input type='email' className='cfl1' required />
                        <br></br>
                        <br></br>
                        <h3>Phone*</h3>
                        <input type='number' className='cfl1' required />
                        <br></br>
                        <br></br>
                        <h3>Comment or Message*</h3>
                        <input type='textarea' className='cfl1' required /><br></br> <br></br> <br></br>
                        <button type='submit'>SUBMIT</button><br></br> <br></br> <br></br>
                        <br></br><br></br>
                    </form>
                </div>
                <img src='https://gourmetliving.com.au/wp-content/uploads/2022/10/source.webp' className='ci2' />
            </div>

        </div>
    )
}

export default Contactus
