import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {Button, Navbar} from 'react-bootstrap';
import { Link,useNavigate } from 'react-router-dom';
import logo from '../logo.svg'
import WebRoute from "../WebRoute";
import React from 'react';
function NavBar() {
  const navigate = useNavigate();

  const logOut = ()=>{
    sessionStorage.removeItem('auth');
    navigate('/Login-form');
  }
  return (
    <>
      <Navbar className='mt-2' bg="dark" variant="dark">
        
        
          <Nav className="me-auto">
            <Nav.Link className='fs-3 mx-4' href="/">Customer List</Nav.Link>          
          </Nav>
          
         <Button className='me-4' onClick={logOut}>logout</Button>
         
         
      </Navbar>
      
    </>
  );
}

export default NavBar;