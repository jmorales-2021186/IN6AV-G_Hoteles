import React from 'react'

export const ListarEventos = ({ name, description }) => {
    return (
        <>
            <div className="card" style={{ margin: '50px' }}>

                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                </div>
                    <div className="card-header">
                        eventos
                    </div>
            </div>
        </>
    )
}
