import React, { useEffect } from 'react';
import './App.css';
import { useLocation, useNavigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import WebRoute from './WebRoute';
import { Container } from 'react-bootstrap';


function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;
  const auth = sessionStorage.getItem('auth');
useEffect(()=>{
if(auth){
  navigate(path);
  if(path==="/login")
  navigate("/")
} else navigate('/login');

},[auth,path]);

  return (
    <Container fluid>

      {auth && <NavBar/>} 
         
        <WebRoute/> 
        </Container>
    
  );
}

export default App;
