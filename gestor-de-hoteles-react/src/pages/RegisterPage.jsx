import React from 'react'
import { Form } from '../components/Form'
import { NavBar } from '../components/NavBar'

export const RegisterPage = () => {
    return (
        <>
            <NavBar />
            <div className='contenedores'>
                <Form
                    parametro1={'name'}
                    parametro2={'surname'}
                    parametro3={'username'}
                    parametro4={'password'}
                    parametro5={'email'}
                    parametro6={'phone'}
                    where='user'
                    url='register'
                />

            </div>

        </>
    )
}
