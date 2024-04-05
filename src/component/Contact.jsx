import React from 'react'

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-title">
        <h3>Contact</h3>
        <h4>Don't be shy! Hit me up! 👇</h4>
      </div>
      <div className="contact-icons">
        <div className="contact-icon-box">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="tabler-icon tabler-icon-map-search"
            >
              <path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v7.5"></path>
              <path d="M9 4v13"></path>
              <path d="M15 7v5"></path>
              <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
              <path d="M20.2 20.2l1.8 1.8"></path>
            </svg>
          </span>
          <div className="contact-info">
            <h4>Location</h4>
            <p>Meaux, France</p>
          </div>
        </div>
      </div>
      <div className="contact-icons">
        <div className="contact-icon-box">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="tabler-icon tabler-icon-mail"
            >
              <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
              <path d="M3 7l9 6l9 -6"></path>
            </svg>
          </span>
          <div className="contact-info">
            <h4>Mail</h4>
            <a href="">yoangovaerts@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
