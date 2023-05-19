import React, { useState, useEffect, useContext } from 'react'
import { Link, useNavigate, Outlet } from 'react-router-dom'
import { SideBar } from '../../components/SideBar/SideBar'
import axios from 'axios'

export const TipoEventosPage = () => {

  const navigate = useNavigate()
  const aaddd = async()=>{
    try{
      let type ={
        name: document.getElementById('inputName').value,
        description: document.getElementById('inputDescrption').value
      }

      const { data } = await axios.post('http://localhost:3418/type/add', type)
      alert(data.message)
      navigate('/eventos')
    }catch(e){
      console.log(e);
    }
  }
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
                  <label htmlFor="inputDescrption" className="form-labler">Descripcion</label>
                  <input type="text" className="form-control" id="inputDescrption" required />
                </div>

                

                <Link to='' onClick={aaddd}>
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
