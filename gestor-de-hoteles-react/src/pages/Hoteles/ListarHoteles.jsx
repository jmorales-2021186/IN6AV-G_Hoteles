import React from 'react'
import {Link} from 'react-router-dom'
import image from '../../assets/header.jpg'

export const ListarHoteles = ({ name, description, id }) => {
  return (
    <>
      <div className="col-lg-4 col-md-6 special-grid drinks" >
        <div className="gallery-single fix" >
          <img src={image} className="img-fluid" alt="Image" style={{ height: '300px' }} />
          <div className="why-text">
            <h4>{name}</h4>
            <p>{description}</p>
            <Link to={`/HotelsInfo/${id}`}>
              <button className="btn btn-dark" style={{ width: "100%" }}>
                Mas info
              </button>
            </Link>
          </div>
        </div>
      </div>


    </>
  )
}
