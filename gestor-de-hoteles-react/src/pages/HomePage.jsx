import React from 'react'
import { Link } from 'react-router-dom'
import { NavBar } from '../components/NavBar'
import '../HomePage.css'

export const HomePage = () => {
  return (
    <>

      <NavBar />

      <div className='hero'>
        <div className='reservar'>
            <Link className='reservar-button'> Reservar</Link>
        </div>

      </div>


    </>
  )
}
