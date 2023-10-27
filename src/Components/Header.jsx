import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header({insideDashboard}) {
  return (
    <div>
        <Navbar className="bg-info w-100 position-fixed top-0" style={{zIndex:'1'}}>
        <Container>
          <Navbar.Brand>
          <Link to={'/'} style={{textDecoration:'none'}} className='text-white'><i className="fa-brands fa-stack-overflow"></i>  Project Fair</Link>
          </Navbar.Brand>
          {
            insideDashboard&&
            <div className='d-inline'><button className='btn btn-danger'>Logout <i className="fa-solid fa-right-from-bracket d-inline"></i></button></div>
          }
        </Container>
      </Navbar>
    </div>
  )
}

export default Header