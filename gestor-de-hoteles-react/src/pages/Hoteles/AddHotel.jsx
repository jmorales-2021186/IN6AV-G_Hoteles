import React, { useEffect, useState } from 'react'
import { NavBar } from '../../components/NavBar'
import { Link, useNavigate } from 'react-router-dom'
import { SideBar } from '../../components/SideBar/SideBar'
import axios from 'axios'


export const AddHotel = () => {

    const navigate = useNavigate()
    const [userAdmin, setUserAdmin] = useState([])

    const getAdmin = async () => {
        try {
            const { data } = await axios('http://localhost:3418/user/seeUsersAdmin')
            console.log(data.message);
            setUserAdmin(data.userGet)
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
                image:'',
                description: document.getElementById('inputDescrption').value
            }

            const { data } = await axios.post(
                'http://localhost:3418/hotels/add',
                hotel
            )

            //Mensaje satisfactorio
            alert(data.message)
            await addImg(hotel.admin)
            navigate('/hoteles')
        } catch (e) {
            console.log(e);
        }
    }

    const addImg = async (admin) => {
        try {

            const { data } = await axios(`http://localhost:3418/hotels/getAdminn/${admin}`)
            console.log('o');
            console.log(data);
            await  agregarLaImg(data.existHotel._id)

        } catch (e) {
            console.log(e);
        }
    }

    const agregarLaImg = async (admin) => {
        try {
            let img = document.getElementById('inputImage').files
            console.log(img[0].name);
            let image = img[0].name
            console.log('aqui');
            const { data } = await axios.put(`http://localhost:3418/hotels/uploadImage/${admin}`, image)
            console.log(data);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getAdmin()
    }, [])

    /*      let filtrar = userAdmin.filter(user => user.role == 'ADMIN_HOTEL') 
     */
    return (
        <>
            <div id='concted'>
                <aside>

                    <SideBar />
                </aside>

                <section id='proyectos'>
                    <div className='centrar'>

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
                                            userAdmin.map(({ _id, name }, i) => {
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

                                <div>
                                    <label htmlFor="inputImage" class="form-label">Miniatura</label>
                                    <input style={{ padding: '10px' }} class="form-control form-control-lg" id="inputImage" type="file" />
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
                    </div>
                </section>

            </div>
        </>
    )
}
