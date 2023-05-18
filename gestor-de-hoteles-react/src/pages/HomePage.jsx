import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import "../HomePage.css";
import header from "../assets/header.jpg";
import { NombreContexto } from "../Index";
import { ModalPage } from "../components/ModalPage";
import { SideBar } from "./DashBoard/SideBar";

export const HomePage = () => {
  const { loggedIn, dataUser } = useContext(NombreContexto);
  const [modal, setModal] = useState(false);

  const login = async () => {
    try {
      setModal(true);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        {dataUser.role === "ADMIN" ? (
          <>
            <SideBar />
          </>
        ) : (
          <NavBar />
        )}

        <div className="hero">
          <div className="reservar">
            <p>
              <Link
                to={loggedIn ? "a" : "/login"}
                class="btn btn-lg btn-circle btn-outline-new-white"
              >
                Reservation
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
