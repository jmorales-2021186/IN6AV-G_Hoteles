import React, {useState, useEffect, useContext} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { Form } from '../components/Form'
import { NavBar } from '../components/NavBar'
import axios from 'axios'

export const RegisterPage = () => {

    const navigate = useNavigate()
    const [userAdmin, setUserAdmin] = useState([])
    const [archivos, setArchivos] = useState()

    const subirArchivos = (e) => {
        const f = new FormData();
        f.append('image', e.target.files[0])
        setArchivos(f)
    }

    const getAdmin = async () => {
        try {
            const { data } = await axios('http://localhost:3418/user/seeUsersAdmin')
            console.log(data.message);
            setUserAdmin(data.userGet)
        } catch (e) {
            console.log(e);
        }
    }


    const register = async () => {
        try {
            let user = {
                name: document.getElementById('inputName').value,
                surname: document.getElementById('inputSurname').value,
                username: document.getElementById('inputUser').value,
                password: document.getElementById('inputPassword').value,
                email: document.getElementById('inputEmail').value,
                phone: document.getElementById('inputPhone').value
            }

            const { data } = await axios.post(
                'http://localhost:3418/user/register',
                user
            )

            console.log(data.user._id);

            //Mensaje satisfactorio
            alert(data.message)
            
             await addImg(data.user._id) 
             navigate('/login')
         } catch (e) {
            console.log(e);
        }
    }

    const addImg = async (admin) => {
        try {
            
            const { data } = await axios(`http://localhost:3418/user/getUserr/${admin}`)
            console.log('hola');
            console.log(data.userExist._id)
           await agregarLaImg(data.userExist._id)  
 
        } catch (e) {
            console.log(e);
        }
    }

    const agregarLaImg = async (admin) => {
        try {
            console.log('aQUIDS');
            console.log(admin)

             await axios.put(`http://localhost:3418/user/uploadImage/${admin}`,
                archivos,
                { headers: { 'Content-Type': 'multipart/form-data' } }
            ) 
        } catch (e) {
            console.log(e);
        }
    }

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
                        <label htmlFor="inputSurname" className="form-labler">surname</label>
                        <input type="text" className="form-control" id="inputSurname" required />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="inputUser" className="form-labler">username</label>
                        <input type="text" className="form-control" id="inputUser" required />
                        
                    </div>

                    <div className="mb-3">
                        <label htmlFor="inputPassword" className="form-labler">Password</label>
                        <input type="password" className="form-control" id="inputPassword" required />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="inputEmail" className="form-labler">Email</label>
                        <input type="password" className="form-control" id="inputEmail" required />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="inputPhone" className="form-labler">Phone</label>
                        <input type="tel" className="form-control" id="inputPhone" required />
                    </div>
                    
                    <div>
                        <label htmlFor="inputImage" class="form-label">Imagen</label>
                        <input style={{ padding: '10px' }} class="form-control form-control-lg" id="inputImage" type="file" onChange={subirArchivos}/>
                    </div>

                    <Link to='' onClick={register}>
                        <button className="btn btn-success m-4" > ADD </button>
                    </Link>
                    {/* parametro.preventDefault(); mps sirve para refrescar los datos en la tabla de products */}
                    <Link to='/hoteles'>{/* Regresar */}
                        <button className="btn btn-danger m-3" >Cancel</button>
                    </Link>

                </form>
            </div>
            {/* <div className='contenedores'>
                <Form
                    parametro1={'name'}
                    parametro2={'surname'}
                    parametro3={'username'}
                    parametro4={'password'}
                    parametro5={'email'}
                    parametro6={'phone'}
                    where='user'
                    url='register'
                />

            </div> */}

        </>
    )
}
