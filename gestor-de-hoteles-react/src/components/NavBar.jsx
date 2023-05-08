import React from 'react'
import '../HomePage.css'
import imagen from '../assets/logo.png'

export const NavBar = () => {
  return (
    <>
      <header className="top-navbar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="" style={{margin: 'auto', display: 'flex'}}>
            <a className="navbar-brand" >
              <img src={imagen} alt="" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbars-rs-food" aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbars-rs-food">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active"><a className="nav-link" >Home</a></li>
                <li className="nav-item"><a className="nav-link" >Menu</a></li>
                <li className="nav-item"><a className="nav-link" >About</a></li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle"  id="dropdown-a" data-toggle="dropdown">Pages</a>
                  <div className="dropdown-menu" aria-labelledby="dropdown-a">
                    <a className="dropdown-item">Reservation</a>
                    <a className="dropdown-item" >Stuff</a>
                    <a className="dropdown-item" >Gallery</a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle"  id="dropdown-a" data-toggle="dropdown">Blog</a>
                  <div className="dropdown-menu" aria-labelledby="dropdown-a">
                    <a className="dropdown-item" >blog</a>
                    <a className="dropdown-item" >blog Single</a>
                  </div>
                </li>
                <li className="nav-item"><a className="nav-link" >Contact</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
