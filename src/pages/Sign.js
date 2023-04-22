import React from 'react'
import hotelbg from '../images/hotelbg.jpg';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function Sign() {

  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    mobile: ""
  });


  const handledata = () => {
    alert("Registeration complete sucessfully")
    navigate("/home")
  }


  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (

    <>
      <h1 id="title">BOOK YOUR STAY</h1>

      <div className='container'>
        <div id="side-part">
          <img src={hotelbg} id="side-image" alt='background' />
          <div id="sign-up">Sign Up</div>
        </div>

        <form onSubmit={handledata}>
          <label htmlFor="name">Name <br></br></label>
          <input
            required
            type="text"
            id="name"
            value={data.firstName}
            name="firstName"
            onChange={handleChange}
            placeholder="Enter a firstName..."
            className='input'

          />
          <br></br>

          <label htmlFor="email">Email <br></br> </label>
          <input
            required
            type="email"
            id="email"
            value={data.email}
            name="email"
            onChange={handleChange}
            placeholder="Enter a email here!..."
            className='input'

          />
          <br></br>
          <label htmlFor="password">password <br></br> </label>
          <input
            required
            type="password"
            id="password"
            value={data.password}
            name="password"
            onChange={handleChange}
            placeholder="Enter a password?...."
            className='input'
          />
          <br></br>
          <label htmlFor="Mobile">Mobile <br></br> </label>
          <input
            required
            type="number"
            id="Mobile"
            value={data.mobile}
            name="mobile"
            onChange={handleChange}
            placeholder="Enter a mobile number"
            className='input'
          />
          <br></br>
          <button type="submit" className="submit" >
            Sign Up
          </button>
        </form>
      </div>


    </>

  )
}
