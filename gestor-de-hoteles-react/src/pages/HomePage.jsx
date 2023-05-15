import React from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import "../HomePage.css";
import header from "../assets/header.jpg";

export const HomePage = () => {
  return (
    <>
      <NavBar />

      <div className="hero">
        <div className="reservar">
          <p>
            <a class="btn btn-lg btn-circle btn-outline-new-white" href="#">
              Reservation
            </a>
          </p>
        </div>
      </div>

      {/*  <div className='hola'>
      <h1>Hoteles</h1>
    </div> */}
    </>
  );
};
