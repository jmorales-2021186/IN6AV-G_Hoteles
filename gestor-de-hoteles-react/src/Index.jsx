import React, { createContext, useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { App } from './App'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { LoginPage } from './pages/LoginPage/LoginPage'
import { RegisterPage } from './pages/RegisterPage'


export const NombreContexto = createContext()

export const Index = () => {

    const [loggedIn, setLoggedIn] = useState(false)
    const [dataUser, setDataUser] = useState({
        name: "",
        username: "",
        role: "",
      });
    

    const routes = createBrowserRouter([
        {
            errorElement: <NotFoundPage />,
            path: '/',
            element: <App />,
            children: [
                {
                    path: '/',
                    element: <HomePage/>
                },
                {
                    path: '/login',
                    element: <LoginPage/>
                },
                {
                    path: '/register',
                    element: <RegisterPage/>
                }
                
            ]
        }
    ])
    return (
        <NombreContexto.Provider value={{ loggedIn,setLoggedIn, dataUser, setDataUser  }}>
            <RouterProvider router={routes} />
        </NombreContexto.Provider>
    )
}

export default Index
