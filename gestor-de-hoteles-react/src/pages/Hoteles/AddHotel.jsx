import React, { useEffect, useState } from 'react'
import { NavBar } from '../../components/NavBar'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


export const AddHotel = () => {

    const navigate = useNavigate()
    const [userAdmin, setUserAdmin] = useState([])

    const getAdmin = async () => {
        try {
            const { data } = await axios('http://localhost:3418/user/getUsers')
            setUserAdmin(data.message)
            console.log(data.message);
        } catch (e) {
            console.log(e);
        }
    }


    const nuevoHotel = async () => {
        try {
            let hotel = {
                name: document.getElementById('inputName').value,
                address: document.getElementById('inputAddress').value,
                admin: document.getElementById('inputAdmin').value,
                description: document.getElementById('inputDescrption').value
            }

            const { data } = await axios.post(
                'http://localhost:3418/hotels/add',
                hotel
            )
            
            //Mensaje satisfactorio
            alert(data.message)
            navigate('/hoteles')
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getAdmin()
    }, [])

    let filtrar = userAdmin.filter(user => user.role == 'ADMIN_HOTEL')

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
                            {
                                filtrar.map(({ _id, name }, i) => {
                                    return (
                                        <option key={i} value={_id}>{name}</option>
                                    )
                                })
                            }
                        </select>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="inputDescrption" className="form-labler">Descripcion</label>
                        <input type="text" className="form-control" id="inputDescrption" required />
                    </div>

                    <Link to='' onClick={nuevoHotel}>
                        <button className="btn btn-success m-4" > ADD </button>
                    </Link>
                    {/* parametro.preventDefault(); mps sirve para refrescar los datos en la tabla de products */}
                    <Link to='/hoteles'>{/* Regresar */}
                        <button className="btn btn-danger m-3" >Cancel</button>
                    </Link>

                </form>
            </div>
        </>
    )
}
