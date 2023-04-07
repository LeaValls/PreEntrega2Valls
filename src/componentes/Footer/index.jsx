import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';


export default function App() {
  return (
    <MDBFooter className='bg-ligth text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        
      </MDBContainer>

      <div className='text-center p-3 text-dark' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className='text-dark' href='https://sylviegabaz.com.ar/'>
          El Atelier de Maria Paca
        </a>
      </div>
    </MDBFooter>
  );
}