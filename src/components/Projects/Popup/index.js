import React from 'react'
import './index.scss'
import { useState,useEffect } from 'react'
import { FiArrowLeft,FiArrowRight } from "react-icons/fi";
import { SlClose } from "react-icons/sl";
import libre from '../../../assets/projects-images/GuestInfo.jpg'
import myWeb from '../../../assets/projects-images/myweb.png'
import cafe from '../../../assets/projects-images/CloudCafe1.jpg'
import cafe2 from '../../../assets/projects-images/CloudCafe2.jpg'

const Popup = (props) => {
  const [cafeImage, setCafeImage] = useState(false)


  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          <SlClose className='close-icon'/>
        </button>
        {props.sendImage === 'cafe' ? (
          <div className="popup-image">
            <button className='next btn' onClick={() => setCafeImage(true)}><FiArrowRight/></button>
            <button className='prev btn' onClick={() => setCafeImage(false)}><FiArrowLeft/> </button>
            {cafeImage === true ?  <img src={cafe}></img> :  <img src={cafe2}></img>}
          </div>
        ) : (
          ''
        )}
           {props.sendImage === 'libre' ? (
          <div className="popup-image">
            <img src={libre}></img>
          </div>
        ) : (
          ''
        )}
           {props.sendImage === 'myweb' ? (
          <div className="popup-image">
            <img src={myWeb}></img>
          </div>
        ) : (
          ''
        )}
           {props.sendImage === 'discord' ? (
          <div className="popup-image">
            <img src={myWeb}></img>
          </div>
        ) : (
          ''
        )}
 

        {props.children}
      </div>
    </div>
  ) : (
    ''
  )
}

export default Popup
