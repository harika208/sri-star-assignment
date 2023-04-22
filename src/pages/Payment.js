import React from 'react'
import { value } from './Home';
import { useNavigate } from 'react-router-dom';
export default function Payment() {
  const navigate = useNavigate()

  const handle = () => {
    alert(`Your payment was sucessfully completed rupees ${value}.booking confirmed`);
    navigate('/home')
  }
  return (
    <>
      <div className='payment'>
        <h1 id="payment-title"> Payment</h1>

        <form id="payment-form">
          <br />
          <label htmlFor='checkIn'>Check In </label>
          <input type='date' id='checkIn' className='input'/>
          <label htmlFor='checkOut'>Check Out  </label>
          <input type='date' id='checkOut' className='input'/> <br />
          <br /><br />
          <input type='radio' value="one" name='person' />one person <br />
          <input type='radio' value="two" name='person' />two person <br /> <br /><br />
          <i className="fa-solid fa-indian-rupee-sign"></i> 
          Rs.{value}/- Only<br/><br/> <button className="now" onClick={handle}>Pay now</button>
        </form>

      </div>
    </>
  )
}
