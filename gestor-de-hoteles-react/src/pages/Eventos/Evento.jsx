import React, { useState, useEffect, useContext } from 'react'
import { Link, useNavigation, Outlet } from 'react-router-dom'
import { SideBar } from '../../components/SideBar/SideBar'
import { ListarEventosN } from './ListarEventosN'
import axios from 'axios'

export const Evento = () => {

  const [event, setEvent] = useState([])

  const listarEvento = async () => {
    try {
      const { data } = await axios('http://localhost:3418/event/get')
/*       console.log(data.events);
 */      setEvent(data.events)
    } catch (e) {
      console.log(e);
    }
  }

  const eliminarEvento = async (id) => {
    try {
      let c = confirm('Seguro que quiere eliinar el evento?')
      if (c) {
        const { data } = await axios.delete(`http://localhost:3418/event/delete/${id}`)
        alert(data.message)
        listarEvento()
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    listarEvento()
  }, [])
  console.log(event);
  return (
    <>
      <div id='concted'>


        <section id='proyectos'>
          <div className='centrar'>
            <Link to='/aggregarNuevo' className='btn btn-primary'>Agregar Evento</Link>

            {
              event.map((type, i) => {
                return (
                  <ListarEventosN
                    key={i}
                    id={type._id}
                    name={type.name}
                    date={type.date}
                    price={type.price}
                    type={type.type.name}
                    eliminarEvento={eliminarEvento}

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
