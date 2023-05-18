import React, { useContext } from "react";
import "./sidebar.css"; // Asegúrate de tener un archivo CSS vinculado
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faChartBar,
  faHotel,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Outlet, Link } from 'react-router-dom'
import { NombreContexto } from '../../index'
import image from '../../assets/logo.png'


export const SideBar = () => {

  const { loggedIn, setLoggedIn, dataUser, setDataUser } = useContext(NombreContexto)

  return (
    <>
      <div className="sidebar">
        <div className="logo">
          <Link to='/' className="navbar-brand logo" >
            <img src={image} alt="" style={{ marginLeft: '-50px' }} width={50} height={50} />
            <p>giov<span className='rojo'>any</span></p>
          </Link>
        </div>

        <ul className="nav">
          <li>
            <Link to='/'>
              <FontAwesomeIcon icon={faHome} />
              <span>Inicio</span>
            </Link>
          </li>
          {
            dataUser.role === 'ADMIN' ? (
              <>

                <li>
                  <Link to='/estadistica'>
                    <FontAwesomeIcon icon={faChartBar} />
                    <span>Estadísticas</span>
                  </Link>
                </li>

                <li>
                  <Link to='/hoteles'>
                    <FontAwesomeIcon icon={faHotel} />
                    <span>Hoteles</span>
                  </Link>
                </li>

                <li>
                  <Link to='/users'>
                    <FontAwesomeIcon icon={faHotel} />
                    <span>Users</span>
                  </Link>
                </li>
              </>
            ) : <></>
          }


          {
            dataUser.role === 'ADMIN_HOTEL' ? (
              <>
                <li>
                  <Link to='/hoteles'>
                
                    <FontAwesomeIcon icon={faHotel} />
                    <span>..Hotel..</span>
                  </Link>
                </li>
              </>
            ) : <></>
          }


          {
            loggedIn === true ? (

              <li>
                <Link
                  to='/'
                  onClick={() => {
                    localStorage.clear()
                    setLoggedIn(false)
                    setDataUser({})
                  }}
                  className="dropdown-item">
                  Cerrar Sesion
                </Link>
              </li>

            ) : <></>
          }

        </ul>
      </div>



    </>
  );
};
