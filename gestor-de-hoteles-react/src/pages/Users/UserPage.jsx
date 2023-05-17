import React, { useState, useEffect, useContext } from 'react'
import { Link, useNavigate, Outlet } from 'react-router-dom'
import { NavBar } from '../../components/NavBar'
import axios from 'axios'
import { SideBar } from '../DashBoard/SideBar'
import { Table } from '../../components/Table'

export const UserPage = () => {

    

   
    return (
        <>
            <div id='concted'>
                <aside>
                    <SideBar />
                </aside>


                <section id='proyectos'>

                    <div className='centrar'>
                        <Link to='client' className='btn btn-danger'>Clientes</Link>
                        <Link to='admins' className='btn btn-warning ms-3'>Admins</Link>
                        <Outlet></Outlet>
                    </div>

                </section>
            </div>
        </>
    )
}
