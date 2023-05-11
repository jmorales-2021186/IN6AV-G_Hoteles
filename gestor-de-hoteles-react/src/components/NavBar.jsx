import React, { useContext } from 'react'
import '../HomePage.css'
import imagen from '../assets/logo.png'
import user from '../assets/user.png'
import { NombreContexto } from '../index'
import {Link} from 'react-router-dom'

export const NavBar = () => {
  const { loggedIn } = useContext(NombreContexto)

  

  return (
    <>
      <header className="top-navbar" >
        <nav className="navbar navbar-expand-lg navbar-light bg-light" >
          <div className="" style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Link className="navbar-brand logo" >
              <img src={imagen} alt="" width={50} height={50} />
              <p>giov<span className='rojo'>any</span></p>
            </Link>

            <div className="" id="navbars-rs-food"/*  style={{ marginRight: '120px' }} */>
              <ul className="navbar-nav ml-auto " /* style={{ marginLeft: '10px' }} */>
                <li className="nav-item active"><Link className="nav-link" >Home</Link></li>
                <li className="nav-item"><Link className="nav-link" >Menu</Link></li>
                <li className="nav-item"><Link className="nav-link" >About</Link></li>
                <li className="nav-item dropdown">
                  <Link className="nav-link " id="dropdown-a" data-toggle="dropdown">Pages</Link>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link " id="dropdown-a" data-toggle="dropdown">Blog</Link>
                </li>

              </ul>
            </div>
            <div style={{ marginRight: '120px' }}>
              <ul className="navbar-nav ml-auto">

                <li class="nav-item dropdown">
                  <Link class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src={user} alt="" className='user' />
                  </Link>
                  <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                    {
                      loggedIn === true ? (
                        <>
                          <li><Link class="dropdown-item" >Action</Link></li>
                          <li><Link class="dropdown-item" >Another action</Link></li>
                          <li><Link class="dropdown-item" >Something else here</Link></li>
                        </>
                      ) : (
                        <>
                          <li><Link to='/register' class="dropdown-item" >Registrarme</Link></li>
                          <li><Link to='/login' class="dropdown-item" >Iniciar Sesion</Link></li>
                        </>
                      )
                    }
                  </ul>
                </li>

                {/* <li className=""><a className="nav-link" >👤</a></li> */}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
