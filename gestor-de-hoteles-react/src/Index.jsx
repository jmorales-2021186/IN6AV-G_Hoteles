import React, { createContext, useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { App } from './App'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'

export const NombreContexto = createContext()

export const Index = () => {

    const [loggedIn, setLoggedIn] = useState()

    const routes = createBrowserRouter([
        {
            errorElement: <NotFoundPage />,
            path: '/',
            element: <App />,
            children: [
                {
                    path: '/',
                    element: <HomePage/>
                }
            ]
        }
    ])
    return (
        <NombreContexto.Provider value={{ loggedIn }}>
            <RouterProvider router={routes} />
        </NombreContexto.Provider>
    )
}

export default Index
