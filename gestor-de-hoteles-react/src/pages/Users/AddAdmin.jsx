import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SideBar } from '../../components/SideBar/SideBar'
import axios from 'axios'

export const AddAdmin = () => {

    const navigate = useNavigate()

    const newAdmin = async () => {
        try {

            let admin = {
                name: document.getElementById('inputName').value,
                surname: document.getElementById('inputSurname').value,
                username: document.getElementById('inputUsername').value,
                password: document.getElementById('inputPassword').value,
                email: document.getElementById('inputEmail').value,
                phone: document.getElementById('inputPhone').value
            }

            const { data } = await axios.post('http://localhost:3418/user/save', admin)
            navigate('/users')

        } catch (e) {
            alert(data.response.data.message)
            console.log(e);
        }
    }
    return (
        <>

            <div id="concted">
                <aside>
                    <SideBar />
                </aside>
            </div>
            <div className='contenedores' style={{marginTop: '-30px'}}>
                <form className="m-5 text-center">

                    <div className="mb-3">
                        <label htmlFor="inputName" className="form-labler">Name</label>
                        <input type="text" className="form-control" id="inputName" required />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="inputSurname" className="form-labler">Surname</label>
                        <input type="text" className="form-control" id="inputSurname" required />
                    </div>


                    <div className="mb-3">
                        <label htmlFor="inputUsername" className="form-labler">Username</label>
                        <input type="text" className="form-control" id="inputUsername" required />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="inputPassword" className="form-labler">Password</label>
                        <input type="text" className="form-control" id="inputPassword" required />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="inputEmail" className="form-labler">Email</label>
                        <input type="text" className="form-control" id="inputEmail" required />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="inputPhone" className="form-labler">Phone</label>
                        <input type="text" className="form-control" id="inputPhone" required />
                    </div>

                    <Link  onClick={newAdmin}>
                        <button className="btn btn-success m-4" > ADD </button>
                    </Link>
                    {/* parametro.preventDefault(); mps sirve para refrescar los datos en la tabla de products */}
                    <Link to='/users'>{/* Regresar */}
                        <button className="btn btn-danger m-3" >Cancel</button>
                    </Link>

                </form>
            </div>
        </>
    )
}
