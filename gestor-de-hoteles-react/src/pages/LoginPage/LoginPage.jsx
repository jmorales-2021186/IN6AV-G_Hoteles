import React, { useState, useContext } from 'react'
import './login.css'
import { NavBar } from '../../components/NavBar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { NombreContexto } from '../../index'

export const LoginPage = () => {

  const {setLoggedIn, setDataUser} = useContext(NombreContexto)

  const navigate = useNavigate()
  const [log, setLog] = useState({
    username: '',
    password: ''
  })

  const handleChange = (e) => {
    setLog({
      ...log,
      [e.target.name]: e.target.value
    })
  }

  const login = async () => {
    try {
      const { data } = await axios.post('http://localhost:3418/user/login', log)
      console.log(data);
      if (data.message) {
        alert(data.message)
        localStorage.setItem('token', data.token)
        setDataUser(data.userLogged)

        setLoggedIn(true)

        navigate('/')
      }
    } catch (e) {
      console.log(e);
      throw new Error('Error logeandose');
    }
  }

  return (
    <>
      <NavBar />
      <div className="login-lg"></div>
      <div className="login-block">
        <h1>Login</h1>
        <input onChange={handleChange} name='username' type="text" placeholder="Username" id="username" />
        <input onChange={handleChange} name='password' type="password" placeholder="Password" id="password" />
        <button onClick={() => login()}>Iniciar</button>
      </div>
    </>
  )
}
