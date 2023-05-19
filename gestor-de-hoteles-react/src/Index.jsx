import React, { createContext, useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { App } from './App'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { LoginPage } from './pages/LoginPage/LoginPage'
import { RegisterPage } from './pages/RegisterPage'
import { HotelesPage } from './pages/Hoteles/HotelesPage'
import { AddHotel } from './pages/Hoteles/AddHotel'
import { UpdateHotel } from './pages/Hoteles/UpdateHotel'
import { UserPage } from './pages/Users/UserPage'
import { SideBar } from './components/SideBar/SideBar'
import { UserClient } from './pages/Users/UserClient'
import { UserAdmin } from './pages/Users/UserAdmin'
import { AddAdmin } from './pages/Users/AddAdmin'
import { UpdateAdmin } from './pages/Users/UpdateAdmin'
import { EstadisticaPage } from './pages/Estadistica/EstadisticaPage'
import { Obtener } from './pages/Obtener'
import { MoreIfo } from './components/MoreInfo'
import { InfoUserPage } from './pages/InfoUserPage'
import { EventoPage } from './pages/Eventos/EventoPage'
import { TipoEvento } from './pages/Eventos/TipoEvento'
import { Evento } from './pages/Eventos/Evento'
import {TipoEventosPage} from './pages/Eventos/TipoEventosPage'
import { AgregarNuevoEve } from './pages/Eventos/AgregarNuevoEve'




export const NombreContexto = createContext()

export const Index = () => {

    const [loggedIn, setLoggedIn] = useState(false)
    const [dataUser, setDataUser] = useState({
        id: '',
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
                    element: <HomePage />
                },
                {
                    path: '/login',
                    element: <LoginPage />
                },
                {
                    path: '/register',
                    element: <RegisterPage />
                },
                {
                    path: '/hoteles',
                    element: <HotelesPage />
                },
                {
                    path: "/HotelsInfo/:id",
                    element: <MoreIfo />
                },
                {
                    path: '/addHotel',
                    element: <AddHotel />
                },
                {
                    path: '/updateHotel',
                    element: <UpdateHotel />
                },
                {
                    path: '/users',
                    element: <UserPage />,
                    children: [
                        {
                            path: 'client',
                            element: <UserClient />
                        },
                        {
                            path: 'admins',
                            element: <UserAdmin />
                        },
                    ]
                },
                {
                    path: '/sidebar',
                    element: <SideBar />
                },
                {
                    path: '/newAdmin',
                    element: <AddAdmin />
                },
                {
                    path: '/updateAdmin/:id',
                    element: <UpdateAdmin />
                },
                {
                    path: '/estadistica',
                    element: <EstadisticaPage />
                },
                {
                    path: '/obtener',
                    element: <Obtener />
                },
                {
                    path: '/infoUser',
                    element: <InfoUserPage />
                },
                {
                    path: '/eventos',
                    element: <EventoPage/>,
                    children:[
                        {
                            path: 'tipoEvento',
                            element: <TipoEvento/>
                        },
                        {
                            path: 'eventoG',
                            element: <Evento/>
                        }
                    ]
                },
                {
                    path: '/addTipo',
                    element: <TipoEventosPage/>
                },
                {
                    path: '/aggregarNuevo',
                    element: <AgregarNuevoEve/>
                }




            ]
        }
    ])
    return (
        <NombreContexto.Provider value={{ loggedIn, setLoggedIn, dataUser, setDataUser }}>
            <RouterProvider router={routes} />
        </NombreContexto.Provider>
    )
}

export default Index
