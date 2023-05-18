import React from "react";
import { useState, useEffect } from "react";
import { SideBar } from "../../components/Sidebar/SideBar";
import { MoreIfo } from "../../components/MoreInfo";
import { Rooms } from "../../components/Rooms";
import axios from "axios";

export const TestPage = () => {
  const [pathFile, setPathFile] = useState();
  let img;
  useEffect(() => {
    const getImage = async () => {
      try {
        const { data } = await axios(
          `http://localhost:3418/room/getImage/QsErKSdXQfB3j-LXvSeOT59F.jpg`
        );

        setPathFile(data);
        img = data;
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
          {pathFile && <img src={img} className="img-fluid" />}

          <div className="why-text">
            <h4></h4>
            <p></p>
            <p></p>
            <h5> </h5>
          </div>
        </div>
      </div>
    </>
  );
};
