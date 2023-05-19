import React, { useState, useEffect, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SideBar } from '../../components/SideBar/SideBar'
import axios from 'axios'
import { ListarEventos } from './ListarEventos'

export const TipoEvento = () => {

    const navigate = useNavigate()
    const [tipo, setTipo] = useState([])

    const obtenerE = async () => {
        try {
            const { data } = await axios('http://localhost:3418/type/gets')
            console.log(data);
            setTipo(data.types)
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => { obtenerE() }, [])
    return (
        <>
            <div id='concted'>


                <section id='proyectos'>
                    <div className='centrar'>
                        <Link to='/addTipo' className='btn btn-primary'>Agregar Tipo Evento</Link>

                        {
                            tipo.map(({ name, description, _id }, i) => {
                                return (
                                    <ListarEventos
                                        key={i}
                                        name={name}
                                        description={description}
                                    />
                                )
                            })
                        }
                    </div>
                </section>
            </div>
        </>
    )
}
