import React, { useEffect, useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { NavBar } from '../components/NavBar'
import { NombreContexto } from '../index'
import axios from 'axios'

export const InfoUserPage = () => {


    const navigate = useNavigate()
    const { dataUser, setLoggedIn, setDataUser } = useContext(NombreContexto)
    const [user, setUser] = useState([])

    const getUser = async () => {
        try {
            console.log(dataUser);
            const { data } = await axios(`http://localhost:3418/user/getUserr/${dataUser.id}`)
            console.log('Hola');
            console.log(data.userExist);
            setUser(data.userExist)
        } catch (e) {
            console.log(e);
        }
    }

    const eliminarCuenta = async (id) => {
        try {
            let c = confirm('Seguro que quiere eliminar su cuenta?')
            if (c) {
                const { data } = await axios.delete(`http://localhost:3418/user/deleteClient/${id}`)
                console.log(data.message);
                cerrar()
            }
            
        } catch (e) {
            console.log(e);
        }
    }
    
    const cerrar = ()=>{
        localStorage.clear()
        setLoggedIn(false)
        setDataUser({})

    }


    useEffect(() => { getUser() }, [])

    return (
        <>
            <NavBar />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                <div className="card" style={{ width: '18rem', marginTop: '200px ' }}>
                    <img crossOrigin="anonymous" src={`http://localhost:3418/user/getImage/${user.image}`} className="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{user.name} {user.surname}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p class="card-text">{user.email}</p>
                        <p class="card-text">{user.phone}</p>

                        <Link to='/' style={{ width: '200px', marginLeft: '15px' }} className='btn btn-danger' onClick={() => eliminarCuenta(user._id)}>Eliminar Cuenta</Link>
                        <Link style={{ width: '200px', marginLeft: '15px', marginTop: '15px' }} className='btn btn-warning'>Editar Cuenta</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
