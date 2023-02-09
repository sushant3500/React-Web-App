import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [name, setName] = useState<string>();
  const [address, setAddress] = useState<string>();
  const [dateOfBirth, setDateOfBirth] = useState<string>();
  const [phoneNumber, setPhoneNumber] = useState<string>();
  const [emailAddress, setEmailAddress] = useState<string>();

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
          <form noValidate onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Address</label>
              <input
                type="text"
                className="form-control"
                required
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Date of Birth</label>
              <input
                type="date"
                className="form-control"
                required
                onChange={(e) => setDateOfBirth(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input
                type="number"
                className="form-control"
                required pattern='\d{10}'
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-control"
                required
                onChange={(e) => setEmailAddress(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"

            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Create;