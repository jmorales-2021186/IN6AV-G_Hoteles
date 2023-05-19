import React, { useState, useEffect, useContext } from 'react'
import { Link, useNavigation, Outlet } from 'react-router-dom'
import { SideBar } from '../../components/SideBar/SideBar'
import axios from 'axios'

export const EventoPage = () => {
    return (
        <>
            <div id='concted'>
                <aside>
                    <SideBar />
                </aside>

                <section id='proyectos'>
                    <div className='centrar'>

                        <Link to='eventoG'className='btn btn-primary'>Eventos</Link>
                        <Link to='tipoEvento' className='btn btn-primary' style={{marginLeft: '15px'}}>Tipo De Eventos</Link>
                        <Outlet />
                    </div>
                </section>
            </div>


        </>
    )
}
