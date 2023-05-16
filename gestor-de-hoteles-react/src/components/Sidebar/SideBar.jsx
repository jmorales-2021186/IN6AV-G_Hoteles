import React from "react";
import "./sidebar.css"; // Asegúrate de tener un archivo CSS vinculado
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faChartBar,
  faHotel,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
export const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="logo">Logo</div>
      <ul className="nav">
        <li>
          <FontAwesomeIcon icon={faHome} />
          <span>Inicio</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faChartBar} />
          <span>Estadísticas</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faHotel} />
          <span>Hoteles</span>
        </li>
      </ul>
    </div>
  );
};
