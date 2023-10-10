import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

function Header() {
  return (
    <div>
        <MDBNavbar light bgColor='warning'>
            <MDBContainer fluid>
            <MDBNavbarBrand href='#' style={{alignItems:'center'}}>
                <img
                src='https://media.tenor.com/tkbRMbqhR2UAAAAC/app-online-store.gif'
                height='30'
                alt=''
                loading='lazy'
                />
                <h5 className='fw-bolder text-light ms-1 mt-1'>E-Kart</h5>
            </MDBNavbarBrand>
            </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header