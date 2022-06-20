import React from 'react'

const Navbar = () => {
  return (
    <header className="navbar wrapper">
      <div className="menu">
          <span>moja firma</span>
      </div>
      <div className="menu">
          <a className="a-menu" href="#about-us">o nas</a>
          <a className="a-menu" href="#offer">oferta</a> 
          <a className="a-menu" href={undefined} id="disabled">kontakt</a>  
      </div>
    </header>
  )
}

export default Navbar