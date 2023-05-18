import React, { useEffect, useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { NavBar } from '../components/NavBar'
import { NombreContexto } from '../index'
import axios from 'axios'

export const InfoUserPage = () => {

    const { dataUser } = useContext(NombreContexto)
    const [user, setUser] = useState([])

    const getUser = async () => {
        try {
            const { data } = await axios(`http://localhost:3418/user/getUserr/${dataUser._id}`)
            console.log(data);
        } catch (e) {
            console.log(e);
        }
    }


    useEffect(() => { getUser() }, [])

    return (
        <>
            <NavBar />
            <div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
            </div>
        </>
    )
}
