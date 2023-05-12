import React from 'react'
import './modal.css'
import { Form } from './Form'

export const ModalPage = ({ modal, setModal }) => {
    return (
        <>
            {
                modal ? (
                    <div className='fondo-modal'>
                        <div className="cont-modal">
                            <Form
                                parametro1={'Username'}
                                parametro2={'Password'}
                            />
                        </div>
                    </div>

                ) : <></>
            }
        </>
    )
}
