import React, { useState, useEffect, useContext, Children } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { SideBar } from '../DashBoard/SideBar'
import axios from 'axios'
import { Bar } from 'react-chartjs-2'
import Chart, { elements } from 'chart.js/auto';

export const EstadisticaPage = () => {

    const [hotels, setHotels] = useState([])
    const [name, setName] = useState([])
    const [reservacion, setReservacion] = useState([])

    const data = {
        labels: name,
        datasets: [{
            label: 'Reservaciones',
            backgroundColor: 'rgba(238, 44, 60, .8)',
            borderColor: 'black',
            data: reservacion
        }]
    };

    const opciones = {
        maintainAspectRatio: false,
        responsive: true
    }



    const getHoteles = async() =>{
        try{
            const { data } = await axios('http://localhost:3418/hotels/get')
            console.log(data);
            let valores = data.hotels
            let name=[], reserva=[];
            setHotels(data.hotels)
            valores.map(elements => {
                name.push(elements.name)
                reserva.push(elements.NumReservations)
            })
            setName(name)
            setReservacion(reserva)
            
        }catch(e){
            console.log(e);
        }
    }

    


    useEffect(()=>{getHoteles()},[])
    console.log(name);
    console.log(reservacion);
/*     console.log(hotels);
 */    return (
        <>
            <div id='concted'>
                <aside>
                    <SideBar />
                </aside>


                <section id='proyectos'>

                    <div className='centrar' style={{marginTop: '200px'}}>
                        <Bar data={data} options={opciones} />

                    </div>

                </section>
            </div>
        </>
    )
}
