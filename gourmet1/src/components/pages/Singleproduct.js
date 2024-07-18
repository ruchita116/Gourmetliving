import React from 'react'
import { useParams } from 'react-router-dom'
import { bestseller, hampers } from '../compo/Datadetails'
import { Link } from 'react-router-dom'

const SingleProduct = () => {

    let { id } = useParams();





    // let demo = hampers.find((filterID) => filterID.id == id)
    // if(!demo){
    //   demo = bestseller.find((filterID) => filterID.id == id)
    // }

    // if(!demo){
    //   return<div>product not found</div>
    // }

    let allproducts = [...hampers, ...bestseller]
    let demo = allproducts.find((filterID) => filterID.id == id)
    return (
        <div>


            <div className='mm1'>
                <div className="single">
                    <Link to={`demo/${demo.id}`}>
                        <img src={demo.image} />
                    </Link>
                </div>
                <div className='tt1'>
                    <h2>{demo.title}</h2>
                    <hr></hr>
                    <h1>{demo.price}</h1>
                    <p>{demo.title}</p>
                    <p>{demo.description}</p>

                  <h4>Out of Stock</h4>
                  <hr></hr>
                </div>



            </div>
        </div>
               
          
    )
        
    
}

export default SingleProduct

