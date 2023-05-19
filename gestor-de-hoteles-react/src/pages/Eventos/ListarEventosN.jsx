import React, { useState, useEffect, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SideBar } from '../../components/SideBar/SideBar'
import { NombreContexto } from '../../index'
import axios from 'axios'

export const ListarEventosN = ({name, date, price, type, eliminarEvento, id }) => {
    return (
        <>
            <div className="card" style={{ margin: '50px' }}>

                <div className="card-body">
                    <h5 className="card-title">Nombre:{name}</h5>
                    <p className="card-text">🗓️Fecha:{date}</p>
                    <p className="card-text">💸Pirce:${price}</p>
                    <p className="card-text">📒Type:{type}</p>
                    <button className='btn btn-danger' onClick={()=>eliminarEvento(id)}>Eliminar</button>
                    
                </div>
                <div className="card-header">
                    eventos
                </div>
            </div>
        </>
    )
}

