import React from 'react'
import { Form } from '../components/Form'

export const RegisterPage = () => {
    return (
        <>
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
        </>
    )
}
