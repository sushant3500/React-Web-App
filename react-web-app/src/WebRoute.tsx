import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Update from './components/Update';
import Create from './components/Create';
import LoginPage from './components/LoginPage';
import CustomerList from './components/CustomerList';
import ErrorPage from './components/ErrorPage';


const WebRoute = () => {
  return (
    <Routes>     
     <Route path='/login' element={<LoginPage/>}/>
      <Route path='/create' element={<Create />} />
      <Route path='/' element={<CustomerList />} />
      <Route path='*' element={<ErrorPage/>} />
      <Route path='/update' element={<Update />} />
    </Routes>
  )
}
export default WebRoute;
