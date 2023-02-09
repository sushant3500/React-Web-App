import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Update = () => {
  const [id, setId] = useState<string | undefined | null>();
  const [name, setName] = useState<any>();
  const [address, setAddress] = useState<any>();
  const [dateOfBirth, setDateOfBirth] = useState<any>();
  const [phoneNumber, setPhoneNumber] = useState<any>();
  const [emailAddress, setEmailAddress] = useState<any>();

  const navigate2 = useNavigate();
  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setAddress(localStorage.getItem("address"));
    setDateOfBirth(localStorage.getItem("dateOfBirth"));
    setPhoneNumber(localStorage.getItem("phoneNumber"));
    setEmailAddress(localStorage.getItem("emailAddress"));

  }, [])


  const handleUpdateClick = (e: any) => {

    e.preventDefault();
    axios.put(`https://63a16429a543280f7754e6f6.mockapi.io/Create/${id}`, {
      name: name,
      address: address,
      dateOfBirth: dateOfBirth,
      phoneNumber: phoneNumber,
      emailAddress: emailAddress

    })
      .then(() => { navigate2('/') })
  }
  return (
    <>
      <div className="d-flex justify-content-center m-2">
        <h1>Update</h1>
      </div>
      <div className="card w-75 mx-auto">
        <div className="card-body">
          <form onSubmit={handleUpdateClick}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Address</label>
              <input
                type="text"
                className="form-control"
                value={address}
                pattern="^[0-9a-zA-Z\s,-]+$"
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Date of Birth</label>
              <input
                type="date"
                className="form-control"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input
                type="number"
                className="form-control"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-control"
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Update