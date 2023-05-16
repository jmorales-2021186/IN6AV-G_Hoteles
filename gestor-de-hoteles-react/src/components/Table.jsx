import React from 'react'

export const Table = ({ name, surname, email, phone, role, key }) => {
    return (
        <>
                <tbody>
                    <tr>
                        <th scope="row">{key}</th>
                        <td>{name}</td>
                        <td>{surname}</td>
                        <td>{email}</td>
                        <td>{phone}</td>
                        <td>{role}</td>
                    </tr>
                </tbody>
        </>
    )
}
