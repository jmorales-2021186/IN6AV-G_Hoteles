import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import axios from 'axios'

export const UserAdmin = () => {

    const [userAdmin, setUserAdmin] = useState([])

    const getAdmin = async () => {
        try {
            const { data } = await axios('http://localhost:3418/user/seeUsersAdmin')
            console.log(data.userGet);
            setUserAdmin(data.userGet)
        } catch (e) {
            console.log(e);
        }
    }

    const eliminarAdmin = async(id)=>{
        try{
            let confirmacion = confirm('Seguro que deseas elimnar este Administrador')
            if(confirmacion){
                const { data } = await axios.delete(`http://localhost:3418/user/delete/${id}`)
                alert(data.message)
                getAdmin()
            }
        }catch(e){
            console.log(e);
        }
    }

    useEffect(() => { getAdmin() }, [])

    return (
        <>

            <h2 style={{ marginTop: '100px' }}>ADMINS</h2>
            <Link to='/newAdmin' className='btn btn-primary mt-3 mb-5' >Nuevo Administrador</Link>

            <table className='table table-striped table-hover'>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Surname</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Role</th>
                        <th colSpan='2'>acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userAdmin.map(({ name, surname, email, phone, role, _id }, i) => {
                            return (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{name}</td>
                                    <td>{surname}</td>
                                    <td>{email}</td>
                                    <td>{phone}</td>
                                    <td>{role}</td>
                                    <td>
                                        <Link to={`/updateAdmin/${_id}`} className='btn btn-dark'>Editar</Link>
                                    </td>
                                    <td>
                                        <button className='btn btn-dark' onClick={()=> {eliminarAdmin(_id)}}>Eliminar</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}
