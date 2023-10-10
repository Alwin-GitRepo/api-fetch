import React, { useEffect, useState } from 'react'
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle
} from 'mdb-react-ui-kit';
import './Main.css'

function Main() {

    const base_url = 'https://dummyjson.com/products';

    // state creation
    const [product,setProduct]=useState([]);
     
    // function creaion for API fetching
    const fetchData = async() =>{
        const response= await fetch(base_url)
        .then(res=>res.json())
        .then(data=>setProduct(data.products))
    }
    console.log(product);

    useEffect(() =>
    {
        fetchData();
    },[]);
  return (
    <div className='card-container my-5'>
        {
            product.map(item =>(
                // product display as card format
                <MDBCard style={{width : 20 + "rem"}}  className='my-3'>
                    <MDBCardImage position='top' alt='...' src={item.thumbnail} />
                    <MDBCardBody>
                        <MDBCardTitle>{item.title}</MDBCardTitle>
                    </MDBCardBody>
                    <MDBCardBody>{item.description}</MDBCardBody>
                    <button className='btn btn-primary'>Buy Now</button>
                </MDBCard>

            ))
        }
    </div>
  )
}


export default Main