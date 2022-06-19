import React from 'react'

const Footer = () => {
  return (
    <footer className="wrapper">
      <div className="company-name">
          <p className="p-company-name">Nazwa firmy - wszelkie prawa zastrzeżone, 2019</p>
      </div>
      <div className="icons">
          <a href="https://www.instagram.com/">
              <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.facebook.com/">
              <i className="fa-brands fa-facebook-square"></i>
          </a>
      </div>
    </footer>
  )
}

export default Footer