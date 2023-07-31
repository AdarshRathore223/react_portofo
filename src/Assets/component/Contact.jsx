import React from 'react'

function Contact() {
  return (
    <div className="contact" id="contact">
        <div className="heading">
          <h2>Contact</h2>
          <span>Connect With Us</span>
        </div>
        <div className="contact-form">
          <form action="">
            <input type="text" placeholder="Your Name" />
            <input type="email" name="" id="" placeholder="Your Email" />
            <textare name="" id="" cols="30" rows="10" placeholder="Write Message Here..."></textare>
            <input type="button" value="Send" className="contact-button" />
          </form >
        </div>
      </div>
  )
}

export default Contact