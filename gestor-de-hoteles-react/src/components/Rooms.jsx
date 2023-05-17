import React, { useEffect, useState } from "react";
import axios from "axios";
import "../HomePage.css";

export const Rooms = ({ name, size, capacity, price, status, image }) => {
  const [pathFile, setPathFile] = useState();
  useEffect(() => {
    const getImage = async () => {
      try {
        const { data } = await axios(
          `http://localhost:3418/room/getImage/${image}`
        );

        setPathFile(data);
      } catch (e) {
        console.log(e);
      }
    };

    getImage();
  }, [pathFile]);

  return (
    <>
      <div className="col-lg-4 col-md-6 special-grid drinks">
        <div className="gallery-single fix">
          {pathFile && <img src={pathFile} className="img-fluid" alt={name} />}

          <div className="why-text">
            <h4>{name}</h4>
            <p>{size}</p>
            <p>{capacity}</p>
            <h5> {price}</h5>
          </div>
        </div>
      </div>
    </>
  );
};
