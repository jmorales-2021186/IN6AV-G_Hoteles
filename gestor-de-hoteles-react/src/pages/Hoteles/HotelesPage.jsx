import React, { useState, useEffect, useContext } from 'react'
import { NavBar } from '../../components/NavBar'
import { SideBar } from '../../components/SideBar/SideBar'
import { ListarHoteles } from './ListarHoteles'
import { NombreContexto } from '../../index'
import { Link } from 'react-router-dom'
import axios from 'axios'

export const HotelesPage = () => {

    const { dataUser } = useContext(NombreContexto);
    const [hoteles, setHoteles] = useState([]);
    const [alamacenador, setAlmacenador] = useState({});
    const [busqueda, setBusqueda] = useState("");

    const getHoteles = async () => {
        try {
            const { data } = await axios("http://localhost:3418/hotels/get");
            console.log(data.hotels);
            setHoteles(data.hotels);
            setAlmacenador(data.hotels);
        } catch (e) {
            console.log(e);
        }
    };

    const handleChange = (e) => {
        setBusqueda(e.target.value);
        filtrar(e.target.value);
    };

    //Busqueda
    const filtrar = (bucar) => {
        var resultados = alamacenador.filter((element) => {
            if (element.name.toString().toLowerCase().includes(bucar.toLowerCase())) {
                return element;
            }
        });
        setHoteles(resultados);
    };

    useEffect(() => {
        getHoteles();
    }, []);

    console.log(hoteles);

    return (
        <>
            <section id={dataUser.role === 'ADMIN' ? 'concted' : ''}>
                <aside>
                    {
                        dataUser.role === 'ADMIN' ? (
                            <SideBar />
                        ) : <NavBar />
                    }
                </aside>

                <section id={dataUser.role === 'ADMIN' ? 'proyectos' : ''}>
                    <div class="all-page-title page-breadcrumb">
                        <div class="container text-center">
                            <div class="row">
                                <div class="col-lg-12">
                                    <h1>Lo mejor de lo mejor....</h1>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="centrar">

                        <div className='input-group mb-3'>

                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Buscar"
                                aria-label="Buscar"
                                value={busqueda}
                                onChange={handleChange}
                            />
                        </div>
                        {dataUser.role === 'ADMIN' ? (
                            <>
                                <Link to='/addHotel' className="btn btn-warning" >Nuevo Hotel</Link>
                                <Link to='/updateHotel' className="btn btn-danger" style={{ marginLeft: '10px' }}>Editar Hotel</Link>
                            </>
                        ) : <></>
                        }
                        <div className='display-hoteles'>


                            {
                                hoteles.map(({ description, name, _id, image }) => {
                                    console.log('estamos en el listar');
                                    return (
                                        <ListarHoteles
                                            key={_id}
                                            id={_id}
                                            name={name}
                                            description={description}
                                            image={image}
                                        />
                                    )

                                })
                            }
                        </div>
                    </div>
                </section>


            </section>



        </>
    )
}
