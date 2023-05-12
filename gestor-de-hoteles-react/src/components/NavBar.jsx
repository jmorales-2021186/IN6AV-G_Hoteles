import React from 'react'
import '../HomePage.css'
import imagen from '../assets/logo.png'

export const NavBar = () => {
  return (
    <>
      <header className="top-navbar" >
        <nav className="navbar navbar-expand-lg navbar-light bg-light" >
          <div className="" style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <a className="navbar-brand" style={{ marginLeft: '20px' }}>
              <img src={imagen} alt="" />
            </a>
            {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbars-rs-food" aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button> */}
            <div className="" id="navbars-rs-food" style={{ marginRight: '120px' }}>
<<<<<<< HEAD
              <ul className="navbar-nav ml-auto " style={{marginLeft: '10px'}}>
=======
              <ul className="navbar-nav ml-auto">
>>>>>>> msicajan
                <li className="nav-item active"><a className="nav-link" >Home</a></li>
                <li className="nav-item"><a className="nav-link" >Menu</a></li>
                <li className="nav-item"><a className="nav-link" >About</a></li>
                <li className="nav-item dropdown">
                  <a className="nav-link " id="dropdown-a" data-toggle="dropdown">Pages</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link " id="dropdown-a" data-toggle="dropdown">Blog</a>
                </li>

              </ul>
            </div>
            <div style={{ marginRight: '10px' }}>
              <ul className="navbar-nav ml-auto">

                <li className="nav-item"><a className="nav-link" >Contact</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
