import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import AttachmentModel from './AttachmentModel';
import { PencilSquare,XCircleFill,SendFill } from 'react-bootstrap-icons'; 

interface dataType {
  id: string,
  name: string,
  address: string,
  dateOfBirth: string,
  phoneNumber: string,
  emailAddress: string

}
const CustomerList = () => {
  const [data, setData] = useState<dataType[]>([]);
  const getData = () => {
    axios.get('https://63e8bda54f3c6aa6e7c22c0b.mockapi.io/crud')
      .then((res) => {
        setData(res.data)
      })
  }
  const [email, setEmail] = useState(" ");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const handleDelete = (id: string) => {
    axios.delete(`https://63e8bda54f3c6aa6e7c22c0b.mockapi.io/crud/${id}`)
      .then(() => {
        getData();
      })
  }
  useEffect(() => {
    getData();
  }, [])

  const setToLocalStorage = (id: string, name: string, address: string, dateOfBirth: string, phoneNumber: string, emailAddress: string) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("address", address);
    localStorage.setItem("dateOfBirth", dateOfBirth);
    localStorage.setItem("phoneNumber", phoneNumber);
    localStorage.setItem("emailAddress", emailAddress);

  }
  const attachmentModel = (email: string) => {
    setEmail(email)
    setShow(true)

  }
  return (
    <>
      <h1 className="d-flex justify-content-center">Customer List</h1>
      <div className='d-flex justify-content-end'>
        <Link to="/create" className="btn btn-outline-info my-3">
          Add New Customer
        </Link>
      </div>

      <div className="card w-80 mx-auto">
        <div className="card-body">
          <AttachmentModel emailId={email} show={show} handleClose={handleClose} />
          <Table striped >
            <thead>
              <tr>
                <th>ID</th>
                <th> Customer Name</th>
                <th>Address</th>
                <th>Date of Birth</th>
                <th>Phone Number</th>
                <th>Email Address</th>
                <th></th>


                <th></th>
                <th></th>
              </tr>
            </thead>
            {data.map((eachData) => {
              return (
                <tbody>
                  <tr>
                    <td>{eachData.id}</td>
                    <td>{eachData.name}</td>
                    <td>{eachData.address}</td>
                    <td>{eachData.dateOfBirth}</td>
                    <td>{eachData.phoneNumber}</td>
                    <td>{eachData.emailAddress}</td>
                    <td > <SendFill title='Send Attachment'size={25}  onClick={() => attachmentModel(eachData.emailAddress)}/>{' '}</td>

                    <td><Link to='/update'> <PencilSquare title='edit' size={25} onClick={() => setToLocalStorage(
                      eachData.id,
                      eachData.name,
                      eachData.address,
                      eachData.dateOfBirth,
                      eachData.phoneNumber,
                      eachData.emailAddress
                    )}/></Link></td>
                    <td><XCircleFill title='delete'color="red" size={25} className='btn-danger' onClick={() => handleDelete(eachData.id)}/></td>
                  </tr>
                </tbody>
              );
            })}
          </Table>
        </div>
      </div>
    </>
  )
}

export default CustomerList;