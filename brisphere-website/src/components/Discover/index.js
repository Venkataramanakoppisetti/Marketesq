import React from 'react';
import { useState } from 'react';
import { FaFacebook } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { CiCircleMinus } from "react-icons/ci";
import { FaCirclePlus } from "react-icons/fa6";
import './index.css';

const Discover = () => {
  const [roomsCount, setRoomsCount] = useState(1);

  const onDecreaseCount = () => {
    if (roomsCount > 1) {
      setRoomsCount(roomsCount - 1)
    }
    
  }

  const onIncreaseCount = () => {
    setRoomsCount(roomsCount + 1)
  }


  return (
    <>
      <div className='landing-container'>
        <div className="details-container">
          <h1 className="details-heading">Work from ladakh</h1>
          <p className="details-description">India's first tourism digital ecosystem</p>
          <div className="social-icons-container">
            <FaFacebook size={25} />
            <BiLogoInstagramAlt size={30} />
          </div>
        </div>
        <div className="bg-image-container"></div>
      </div>
      <form className="checkin-container">
        <div className="checkin">
          <label htmlFor='checkin' className="checkin-heading">CHECK-IN</label>
          <input type="date" name="" id="checkin" />
        </div>
        <div className="checkout">
          <label htmlFor='checkout' className="checkout-heading">CHECK-OUT</label>
          <input type="date" name="" id="checkout" />
        </div>
        <div className="rooms-count">
          <p className="rooms">ROOMS</p>
          <div className="count-container">
            <CiCircleMinus size={20} onClick={onDecreaseCount} />
            <p className="rooms-counter">{roomsCount}</p>
            <FaCirclePlus size={20} onClick={onIncreaseCount} />
          </div>
        </div>
        <button className="book-rooms-button">BOOK</button>
      </form>
    </>
    

    
  )
}

export default Discover
