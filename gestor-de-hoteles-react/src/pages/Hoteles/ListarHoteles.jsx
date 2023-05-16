import React from 'react'
import image from '../../assets/header.jpg'

export const ListarHoteles = ({name, address }) => {
  return (
    <>
      <div className="col-lg-4 col-md-6 special-grid drinks" >
        <div className="gallery-single fix" >
          <img src={image} className="img-fluid" alt="Image" style={{height: '300px'}}/>
            <div className="why-text">
              <h4>{name}</h4>
              <p>{address}</p>
              <button className='btn btn-dark' style={{width:'100%'}} >Mas info</button>
            </div>
        </div>
      </div>

      
    </>
  )
}
