import React, { useState, useEffect, useContext } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { SideBar } from './DashBoard/SideBar'
import axios from 'axios'

export const EstadisticaPage = () => {
    return (
        <>
            <>
                <div id='concted'>
                    <aside>
                        <SideBar />
                    </aside>


                    <section id='proyectos'>

                        <div className='centrar'>
                            
                        </div>

                    </section>
                </div>
            </>
        </>
    )
}
