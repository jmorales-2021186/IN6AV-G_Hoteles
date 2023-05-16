import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { NavBar } from '../../components/NavBar'
import axios from 'axios'

export const UpdateHotel = () => {
    return (
        <>
            <NavBar />
            <div className='contenedores'>
                <form className="m-5 text-center">

                    <div className="mb-3">
                        <label htmlFor="inputName" className="form-labler">Name</label>
                        <input type="text" className="form-control" id="inputName" required />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="inputAddress" className="form-labler">Address</label>
                        <input type="text" className="form-control" id="inputAddress" required />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="inputAdmin" className="form-labler">Addmin Hotel</label>
                        <select id="inputAdmin" className="form-control">
                            {/* {
                                filtrar.map(({ _id, name }, i) => {
                                    return (
                                        <option key={i} value={_id}>{name}</option>
                                    )
                                })
                            } */}
                        </select>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="inputDescrption" className="form-labler">Descripcion</label>
                        <input type="text" className="form-control" id="inputDescrption" required />
                    </div>

                    <Link to='' >
                        <button className="btn btn-success m-4" > UPDATE </button>
                    </Link>
                    {/* parametro.preventDefault(); mps sirve para refrescar los datos en la tabla de products */}
                    <Link to='/hoteles'>{/* Regresar */}
                        <button className="btn btn-danger m-3" >CANCEL</button>
                    </Link>

                </form>
            </div>
        </>
    )
}
