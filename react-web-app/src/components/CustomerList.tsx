import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';

interface dataType {
  id: string,
  name: string,
  address: string,
  dateOfBirth: string,
  phoneNumber: string,
  emailAddress:string

}
const CustomerList = () => {
  const [data, setdata] = useState<dataType[]>([]);
  const getData = () => {
    axios.get('https://63a16429a543280f7754e6f6.mockapi.io/Create')
      .then((res) => {
        setdata(res.data)
      })
  }

  const handleDelete = (id: string) => {
    axios.delete(`https://63a16429a543280f7754e6f6.mockapi.io/Create/${id}`)
      .then(() => {
        getData();
      })
  }
  useEffect(() => {
    getData();
  }, [])

  const setToLocalStorage = (id: string, name: string, address: string, dateOfBirth: string, phoneNumber: string, emailAddress:string) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("address", address);
    localStorage.setItem("dateOfBirth", dateOfBirth);
    localStorage.setItem("phoneNumber", phoneNumber);
    localStorage.setItem("emailAddress", emailAddress);

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

          <Table >
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
                    <td><Link to={`/email`}>{eachData.emailAddress}</Link></td>
                    <td><Link to='/update'><Button className='btn-success' onClick={() => setToLocalStorage(
                      eachData.id,
                      eachData.name,
                      eachData.address,
                      eachData.dateOfBirth,
                      eachData.phoneNumber,
                      eachData.emailAddress
                    )}>Edit</Button></Link></td>
                    <td><Button className='btn-danger' onClick={() => handleDelete(eachData.id)}>Delete</Button></td>
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