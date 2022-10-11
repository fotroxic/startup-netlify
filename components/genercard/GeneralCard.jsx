import React from 'react'
import {FaFacebook, FaTwitter, FaInstagram, FaLinkedin,FaYoutube} from 'react-icons/fa'

const GeneralCard = () => {
  return (
        <div className="general-container">
        <div className="general-block">
            <div className="general-img">
                <img src="https://i0.wp.com/en.split-techcity.com/wp-content/uploads/sites/2/2022/07/foto_2-1.jpg?resize=610%2C610&ssl=1" alt="" />
            </div>
            <span> Internationals </span>
            <div className='general-desc'>
            Another international that fell in love with Split! 
            </div>
        </div>

        <div className="general-block">
            <div className="general-img">
                <img src="https://i0.wp.com/en.split-techcity.com/wp-content/uploads/sites/2/2022/07/omer-web.jpg?resize=610%2C610&ssl=1" style={{'borderRadius':'50%'}} alt="" />
            </div>
            <span> General </span>
            <div className='general-desc'>
            Festival of Technology and Entrepreneurship Speaker: Omer Chehmer
            </div>
        </div>

        <div className="general-block">
            <div className="general-img">
                <img src="https://i0.wp.com/en.split-techcity.com/wp-content/uploads/sites/2/2022/07/foto_11.jpg?resize=610%2C610&ssl=1"  alt="" />
            </div>
            <span> Digital Nomands </span>
            <div className='general-desc'>
                Locals’n’Nomads meetup: the lucky 13th!  
            </div>
        </div>

        <div className="general-block">

            <div className="social-title">
                <h4>Follow us on social media!</h4>
            </div>
            <div className="social-desc">
            We gather and empower our community online, as well as offline. Join us in lectures, workshops, and meetups we are organizing!
            </div>
            <div className="social-container">
                <div className="social-icon">
                <FaFacebook className='icons' />
                </div>
                <div className="social-icon">
                <FaTwitter  className='icons'/>
                </div>
                <div className="social-icon">
                <FaInstagram className='icons' />
                </div>
                <div className="social-icon">
                <FaLinkedin  className='icons' />
                </div>
                <div className="social-icon">
                <FaYoutube  className='icons' />
                </div>
            </div>
            </div>

        </div>
  )
}

export default GeneralCard