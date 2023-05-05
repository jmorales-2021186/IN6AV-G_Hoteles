import React from 'react'
import { useState, useContext } from "react";

import { useNavigate, Outlet } from "react-router-dom";
import axios from "axios";
import { NombreContexto } from "../../Index";
import { NavBar } from "../../components/NavBar";

export const Form = ({parametro1, parametro2, parametro3, parametro4, parametro5, parametro6, parametro7,where, url}) => {

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      }
      const { loggedIn, setLoggedIn, dataUser, setDataUser } =
        useContext(NombreContexto);
    
      const [form, setForm] = useState({
        parametro1: "",
        parametro2: "",
        parametro3: "",
        parametro4: "",
        parametro5: "",
        parametro6: "",
        parametro7: "",
      });
    
      const handleChange = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        });
      };
    
      const register = async (e) => {
        try {
          if (dataUser.role == "ADMIN") {
            e.preventDefault();
            const { data } = await axios.post(
              `http://localhost:3418/${where}/${url}`,
              form,
              {headers: headers},
            );
            if (data.message) {
              alert(data.message);
           
            }
          } else {
            e.preventDefault();
            const { data } = await axios.post(
              "http://localhost:3418/user/register",
              form
            );
            if (data.message) {
              alert(data.message);
              e.preventDefault(false);
            }
          }
        } catch (err) {
          console.log(err);
          alert(err.response.data.message);
          throw new Error("Error registering user");
        }
      };
  return (
    <>
      <div className="navFix">
        <NavBar></NavBar>
      </div>

      <div className="container ">
        {dataUser.role == "ADMIN" ? (
          <h3 className="text-center">Sing Up</h3>
        ) : (
          <h3 className="text-center">Resgistrate con Nosotros</h3>
        )}
        <form className="m-5 text-center">
          <div className="mb-3">
            <label className="form-label" htmlFor="">
              {parametro1}
            </label>
            <input
              onChange={handleChange}
              name={parametro1}
              className="form-control"
              type="text"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="">
            {parametro2}
            </label>
            <input
              onChange={handleChange}
              name={parametro2}
              className="form-control"
              type="text"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="">
            {parametro3}
            </label>
            <input
              onChange={handleChange}
              name={parametro3}
              className="form-control"
              type="text"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="">
            {parametro4}
            </label>
            <input
              onChange={handleChange}
              name={parametro4}
              className="form-control"
              type="text"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="">
            {parametro5}
            </label>
            <input
              onChange={handleChange}
              name= {parametro5}
              className="form-control"
              type="text"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="">
            {parametro6}
            </label>
            <input
              onChange={handleChange}
              name= {parametro6}
              className="form-control"
              type="text"
            />
          </div>
          <div className="mb-3">
            {dataUser.role == "ADMIN" ? (
              <>
                <label className="form-label" htmlFor="">
                {parametro7}
                </label>
                <input
              onChange={handleChange}
              name= {parametro7}
              className="form-control"
              type="text"
            />
            
              </>
            ) : (
              <> </>
            )}
          </div>
          <button onClick={(e) => register(e)} className="btn btn-primary">
            Sign Up
          </button>
        </form>
      </div>
    </>
  )
}
