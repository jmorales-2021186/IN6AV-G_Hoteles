import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
import "../HomePage.css";
import imgLoading from "../assets/logo.png";
import { Rooms } from "../components/Rooms";
import { NavBar } from "./NavBar";

export const MoreIfo = () => {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();
  const [hotels, setHotels] = useState([{}]);
  const [room, setRoom] = useState([{}]);
  [];

  const getHoteles = async () => {
    try {
      const { data } = await axios(`http://localhost:3418/hotels/get/${id}`);

      setHotels(data);
      setTimeout(() => setLoading(false), 1000);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  const getRooms = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:3418/room/getRoom/${id}`
      );
      console.log(data);
      setRoom(data.hotel);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => getHoteles, []);

  useEffect(() => getRooms, []);

  if (loading) {
    return <img src={imgLoading} alt="" />;
  }

  return (
    <>
      <NavBar />
      <div className="about-section-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <img src="../../assets/header.jpg" alt="" className="img-fluid" />
            </div>
            <div className="col-lg-6 col-md-6 text-center">
              <div className="inner-column">
                <h1>
                  Welcome To{" "}
                  {(() => {
                    if (hotels && hotels.hotel) {
                      return <span> {hotels.hotel.name}</span>;
                    }
                    return null;
                  })()}
                </h1>
                <h4>Little Story</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque auctor suscipit feugiat. Ut at pellentesque ante,
                  sed convallis arcu. Nullam facilisis, eros in eleifend luctus,
                  odio ante sodales augue, eget lacinia lectus erat et sem.{" "}
                </p>
                <p>
                  Sed semper orci sit amet porta placerat. Etiam quis finibus
                  eros. Sed aliquam metus lorem, a pellentesque tellus pretium
                  a. Nulla placerat elit in justo vestibulum, et maximus sem
                  pulvinar.
                </p>
                <a
                  className="btn btn-lg btn-circle btn-outline-new-white"
                  href="#"
                >
                  Reservation
                </a>
              </div>
            </div>
            <div className="col-md-12">
              <div className="inner-pt">
                <p>
                  Sed tincidunt, neque at egestas imperdiet, nulla sapien
                  blandit nunc, sit amet pulvinar orci nibh ut massa. Proin nec
                  lectus sed nunc placerat semper. Duis hendrerit elit nec
                  sapien porttitor, ut pretium ipsum feugiat. Aenean volutpat
                  porta nisi in gravida. Curabitur pulvinar ligula sed facilisis
                  bibendum. Nullam vitae nulla elit.{" "}
                </p>
                <p>
                  Integer purus velit, eleifend eu magna volutpat, porttitor
                  blandit lectus. Aenean risus odio, efficitur quis erat eget,
                  mattis tristique arcu. Fusce in ante enim. Integer consectetur
                  elit nec laoreet rutrum. Mauris porta turpis nec tellus
                  accumsan pellentesque. Morbi non quam tempus, convallis urna
                  in, cursus mauris.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="menu-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="heading-title text-center">
                <h2>Rooms</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="special-menu text-center">
                <div className="button-group filter-button-group">
                  <button className="active" data-filter="*">
                    All
                  </button>
                  <button data-filter=".drinks">Economic</button>
                  <button data-filter=".lunch">Standart</button>
                  <button data-filter=".dinner">Premium</button>
                </div>
              </div>
            </div>
          </div>

          <div className="row special-list">
            <div className="col-lg-4 col-md-6 special-grid drinks">
              {room.map(({ name, size, capacity, price, image, _id }) => {
                return (
                  <Rooms
                    key={_id}
                    name={name}
                    size={size}
                    capacity={capacity}
                    price={price}
                    image={image}
                  ></Rooms>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
