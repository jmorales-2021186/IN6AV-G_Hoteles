import React from 'react'
import '../HomePage.css'
import imagen from '../assets/react.png'

export const NavBar = () => {
  return (
    <>
      <header>
        <div className='contenedor'>
          
         <section id='logo'>
            <img src={imagen} id='imagen' alt="" width={'50px'} height={'50px'}/>
            <h1>Hotel</h1>
         </section>
          <div >
            <nav>
              <ul className='nav'>
                <li>lista</li>
                <li>list</li>
                <li>listsa</li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    

    </>
  )
}
