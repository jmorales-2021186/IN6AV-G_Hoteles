import React from 'react'

export const ListarHoteles = ({name, address, }) => {
  return (
    <>
      <div class="col-lg-4 col-md-6 special-grid drinks" >
        <div class="gallery-single fix" >
          <img src="" class="img-fluid" alt="Image"/>
            <div class="why-text">
              <h4>{name}</h4>
              <h4>{address}</h4>
              <p>Este es un hotels de prueba prueba y mas pruebas</p>
              <button>Mas info</button>
            </div>
        </div>
      </div>

      
    </>
  )
}
