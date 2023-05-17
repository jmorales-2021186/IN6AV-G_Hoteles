import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { SideBar } from '../DashBoard/SideBar'
import axios from 'axios'
import { UserAdmin } from './UserAdmin'

export const UpdateAdmin = () => {

    const { id } = useParams()
    const navigate = useNavigate()
    const [userAdmin, setUserAdmin] = useState({})

    const getAdmin = async () => {
        try {
            const { data } = await axios(`http://localhost:3418/user/getUserr/${id}`)
            console.log(data);
            setUserAdmin(data.exist)
        } catch (e) {
            console.log(e);
        }
    }

    const updateAdmin = async () => {
        try {
            let admin = {
                name: document.getElementById('inputName').value,
                surname: document.getElementById('inputSurname').value,
                username: document.getElementById('inputUsername').value,
                email: document.getElementById('inputEmail').value,
                phone: document.getElementById('inputPhone').value
            }

            const { data } = await axios.put(`http://localhost:3418/user/update/${id}`, admin)
            alert(data.message)
            navigate('/users')
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => { getAdmin() }, [])
    return (
        <>

            <div id="concted">
                <aside>
                    <SideBar />
                </aside>
            </div>
            <div className='contenedores' style={{ marginTop: '-30px' }}>
                <form className="m-5 text-center">

                    <div className="mb-3">
                        <label htmlFor="inputName" className="form-labler">Name</label>
                        <input type="text" defaultValue={userAdmin.name} className="form-control" id="inputName" required />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="inputSurname" className="form-labler">Surname</label>
                        <input type="text" defaultValue={userAdmin.surname} className="form-control" id="inputSurname" required />
                    </div>


                    <div className="mb-3">
                        <label htmlFor="inputUsername" className="form-labler">Username</label>
                        <input type="text" defaultValue={userAdmin.username} className="form-control" id="inputUsername" required />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="inputEmail" className="form-labler">Email</label>
                        <input type="text" defaultValue={userAdmin.email} className="form-control" id="inputEmail" required />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="inputPhone" className="form-labler">Phone</label>
                        <input type="text" defaultValue={userAdmin.phone} className="form-control" id="inputPhone" required />
                    </div>

                    <Link onClick={updateAdmin}>
                        <button className="btn btn-success m-4" > UPDATE </button>
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
