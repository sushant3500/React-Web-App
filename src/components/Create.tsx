import axios from 'axios';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [name, setName] = useState<string>();
  const [address, setAddress] = useState<string>();
  const [dateOfBirth, setDateOfBirth] = useState<string>();
  const [phoneNumber, setPhoneNumber] = useState<string>();
  const [emailAddress, setEmailAddress] = useState<string>();
  const [validated, setValidated] = useState(false);

  const history = useNavigate();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    axios.post('https://63a16429a543280f7754e6f6.mockapi.io/Create', {
      name: name,
      address: address,
      dateOfBirth: dateOfBirth,
      phoneNumber: phoneNumber,
      emailAddress: emailAddress
    })
      .then(() => history('/'))
  }
  return (
    <>
      <div className="d-flex justify-content-center between m-2">
        <h2> Create New Customer</h2>
      </div>
      <div className="card w-75 mx-auto">
        <div className="card-body">
          <Form validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Customer Name*</Form.Label>
              <Form.Control required pattern="^[a-zA-Z]+ [a-zA-Z]+$" type="text" placeholder="Enter Your Name"
                onChange={(e) => setName(e.target.value)} />
              <Form.Text className="text-muted">
                Add First name and last name e.g.'Sushant Sawant'
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAddress">
              <Form.Label>Address*</Form.Label>
              <Form.Control required pattern="^[0-9a-zA-Z\s,-]+$" type="text" placeholder="123 Main St"
                onChange={(e) => setAddress(e.target.value)} />
              <Form.Text className="text-muted">
                Enter Your Address
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDateOfBirth">
              <Form.Label>Date of Birth*</Form.Label>
              <Form.Control required type="date" onChange={(e) => setDateOfBirth(e.target.value)} />
              <Form.Text className="text-muted">
                Enter Your Date of Birth
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
              <Form.Label>Phone Number*</Form.Label>
              <Form.Control required pattern="/^\d{10}$/" type="text" onChange={(e) => setPhoneNumber(e.target.value)} />
              <Form.Text className="text-muted">
                Enter 10 digit Mobile Number
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control required pattern='^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$' type="email" placeholder="Enter email"
                onChange={(e) => setEmailAddress(e.target.value)} />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>

        </div>
      </div>
    </>
  )
}

export default Create;