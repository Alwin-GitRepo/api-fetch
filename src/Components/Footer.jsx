import React from 'react'
import { MDBFooter } from 'mdb-react-ui-kit';

function Footer() {
  return (
    <div>
        <MDBFooter bgColor='warning' className='text-center text-lg-left text-light fw-bold' >
        <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            &copy; {new Date().getFullYear()} Copyright:{' '}
            <a className='text-light fw-bold' href='https://mp.com/'>
            EKart.com
            </a>
        </div>
        </MDBFooter>
    </div>
  )
}

export default Footer