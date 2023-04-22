import React from 'react'
import { useNavigate } from 'react-router-dom'
let value;
export default function Home() {

    const arr=[
        {
        "id":1,
        "title":"SPOT ON Srinivasa Boarding And Lodging Near Vijayanagar Metro Station",
        "price":"1,499",
        "image":"https://images.oyoroomscdn.com/uploads/hotel_image/103428/large/cfb087e6673e4980.jpg ",
        "address":"Sajjepalya,Bangalore"
    }, {
        "id":2,
        "title":"SPOT ON 811611 Hotel Sri Thirumala Paradise",
        "price":"999 ",
        "image":" https://images.oyoroomscdn.com/uploads/hotel_image/209175/large/d8a16b3ad9c2e64f.jpg",
        "address":"Sevashrama, Bangalore"

    },
    {
        "id":3,
        "title":"Super OYO White Pearl Resort",
        "price":"549 ",
        "image":" https://images.oyoroomscdn.com/uploads/hotel_image/172385/large/trbcrorbhksh.jpg",
        "address":"Lalbagh Botanical Garden, Bangalore"

    }, {
        "id":4,
        "title":"Super OYO Hotel Subha Residency ",
        "price":"799 ",
        "image":" https://images.oyoroomscdn.com/uploads/hotel_image/11355/large/23da4fb0d7b41d1e.jpg",
        "address":"Majestic, Bangalore"

    },
    {
        "id":5,
        "title":"OYO Flagship 811000 Atithi Comforts",
        "price":"499 ",
        "image":"https://images.oyoroomscdn.com/uploads/hotel_image/208068/medium/cdfad7de1328a732.jpg",
        "address":"Yeshwantpur, Bangalore"

    },
    {
        "id":6,
        "title":"Capital O Green Residency",
        "price":"899 ",
        "image":"https://images.oyoroomscdn.com/uploads/hotel_image/110516/medium/7f532b23c65a3e66.jpg",
        "address":" Near Summanahalli Bus Stop, Bangalore"

    },
    {
        "id":7,
        "title":"OYO Royal Inn Near Iskcon Temple Bangalore",
        "price":"799 ",
        "image":"https://images.oyoroomscdn.com/uploads/hotel_image/48059/medium/8babc9fb96ed3fc7.jpg",
        "address":" Near 14th Main Road, Rajaji Nagar, Bangalore"

    },
    {
        "id":8,
        "title":"OYO Hotel Silver House Near Mantri Square Mall",
        "price":"799 ",
        "image":"https://images.oyoroomscdn.com/uploads/hotel_image/99884/medium/283328d860e322f7.jpg",
        "address":"Reliance Smart Building Magadi Main Road, Bangalore"

    },
    {
        "id":9,
        "title":"Collection O Nandi Comforts",
        "price":"799 ",
        "image":"https://images.oyoroomscdn.com/uploads/hotel_image/204987/medium/f8b48ceb7c1652ed.jpg",
        "address":"Yeshwantpur, Bangalore"
    }]
    const navigate=useNavigate()
    
    const handle=async(price)=>{
        value=price
        console.log(value);
        navigate('/payment')


    }
  return (
  <>
    <h1 id="hotels-title">Hotels in Malleshwaram</h1>
    <hr/>

    <div className="flex">
        {arr.map((item) => {
          return (
            <div className="child " key={item.id}>
              <img className="child-image-size" src={item.image} alt="images" />
              <br />
              <b className="header">
                <b className="header-title">{item.title} </b> 
              </b>
              <br />
              <b className="address">
                <b className="header-title">{item.address} </b> 
              </b>
              <br />

              <div className='block'>         
              <span className="price">
                <b className='price-title' >Price  </b> 
                <i className="fa-solid fa-indian-rupee-sign"></i>
                <b className="discount-price" >{` Rs.${item.price}/- `}</b>
              </span>
              <br /> <br/> 
              <button className="add-to-cart" onClick={()=>handle(item.price)}>Book Now</button>

              </div>
              
            </div>
          );
        })}
      </div>

   
    
   



  </>
   

  )
}
export  {value};
