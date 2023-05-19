import React, { useState, useEffect, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SideBar } from '../../components/SideBar/SideBar'
import { NombreContexto } from '../../index'
import axios from 'axios'
import { ListarEventos } from './ListarEventos'

export const AgregarNuevoEve = () => {

    const navigate = useNavigate()
    const {dataUser} = useContext(NombreContexto)
    const [tipo, setTipo] = useState([])

    const addEvento = async () => {
        try {
            let evento = {
                name: document.getElementById('inputName').value,
                date: document.getElementById('inputDate').value,
                price: document.getElementById('inputPrice').value,
                type: document.getElementById('inputType').value
            }
            const { data } = await axios.post(`http://localhost:3418/event/addEvents/${dataUser.id}`, evento)
            console.log(data.message);
            alert(data.message)
            navigate('/eventos')
        } catch (e) {
            console.log(e);
        }
    }

    const obtenerE = async () => {
        try {
            const { data } = await axios('http://localhost:3418/type/gets')
            console.log(data);
            setTipo(data.types)
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(()=>{obtenerE()},[])
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
                                    <label htmlFor="inputDate" className="form-labler">Date</label>
                                    <input type="date" className="form-control" id="inputDate" required />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="inputPrice" className="form-labler">Price</label>
                                    <input type="text" className="form-control" id="inputPrice" required />
                                </div>


                                <div className="mb-3">
                                    <label htmlFor="inputType" className="form-labler">Type</label>
                                    <select id="inputType" className="form-control">
                                        {
                                            tipo.map(({ _id, name }, i) => {
                                                return (
                                                    <option key={i} value={_id}>{name}</option>
                                                )
                                            })
                                        } 
                                    </select>
                                </div>

                                <Link to='' onClick={addEvento} >
                                    <button className="btn btn-success m-4" > ADD </button>
                                </Link>
                                {/* parametro.preventDefault(); mps sirve para refrescar los datos en la tabla de products */}
                                <Link to='/eventos'>{/* Regresar */}
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
