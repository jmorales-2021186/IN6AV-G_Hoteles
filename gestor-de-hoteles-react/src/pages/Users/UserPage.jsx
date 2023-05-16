import React, { useState, useEffect, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { NavBar } from '../../components/NavBar'
import axios from 'axios'
import { SideBar } from '../DashBoard/SideBar'
import { Table } from '../../components/Table'

export const UserPage = () => {

    const [userClient, setUserClient] = useState([])
    const [userAdmin, setUserAdmin] = useState([])


    const getClient = async () => {
        try {
            const { data } = await axios('http://localhost:3418/user/seeUsers')
            console.log(data.userGet);
            setUserClient(data.userGet)
        } catch (e) {
            console.log(e);
        }
    }

    const getAdmin = async () => {
        try {
            const { data } = await axios('http://localhost:3418/user/seeUsersAdmin')
            console.log(data.userGet);
            setUserAdmin(data.userGet)
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getClient(),
            getAdmin()
    }, [])

    return (
        <>
            <div id='concted'>
                <aside>
                    <SideBar />
                </aside>


                <section id='proyectos'>

                    <div className='centrar'>
                        <h2>Clients</h2>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Surname</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Role</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    userClient.map(({ name, surname, email, phone, role }, i) => {
                                        return (
                                            <>
                                                <tr key={i}>   
                                                        name={name}
                                                        surname={surname}
                                                        email={email}
                                                        phone={phone}
                                                        role={role}
                                                </tr>

                                            </>
                                        )
                                    })
                                }

                            </tbody>

                        </table>

                        <h2>ADMINS</h2>
                        {
                            userAdmin.map(({ name, surname, email, phone, role }, i) => {
                                return (
                                    <Table
                                        key={i}
                                        name={name}
                                        surname={surname}
                                        email={email}
                                        phone={phone}
                                        role={role}
                                    />
                                )
                            })
                        }
                    </div>

                </section>
            </div>
        </>
    )
}
