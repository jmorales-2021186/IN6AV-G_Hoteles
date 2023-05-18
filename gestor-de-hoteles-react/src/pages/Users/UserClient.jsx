import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const UserClient = () => {

    const [userClient, setUserClient] = useState([])
    const getClient = async () => {
        try {
            const { data } = await axios('http://localhost:3418/user/seeUsers')
            console.log(data.userGet);
            setUserClient(data.userGet)
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => { getClient() }, [])
    return (
        <>
            <h2 style={{ marginTop: '100px' }}>Clients</h2>
            <table className='table table-striped table-hover'>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Surname</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Role</th>
                        <th>image</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userClient.map(({ name, surname, email, phone, role, image }, i) => {
                            return (
                                <>
                                    <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td>{name}</td>
                                        <td>{surname}</td>
                                        <td>{email}</td>
                                        <td>{phone}</td>
                                        <td>{role}</td>
                                        <td> <img crossOrigin="anonymous" src={`http://localhost:3418/user/getImage/${image}`} style={{width: '50px', height: '50px', borderRadius: '20px'}}/> </td>
                                    </tr>

                                </>
                            )
                        })
                    }

                </tbody>

            </table>
        </>
    )
}
