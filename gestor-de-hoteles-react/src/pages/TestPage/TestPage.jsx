import React from "react";
import { SideBar } from "../../components/Sidebar/SideBar";
import { MoreIfo } from "../../components/MoreInfo";
import { Rooms } from "../../components/Rooms";

export const TestPage = () => {
  const [pathFile, setPathFile] = useState();
  useEffect(() => {
    const getImage = async () => {
      try {
        const { data } = await axios(
          `http://localhost:3418/room/getImage/QsErKSdXQfB3j-LXvSeOT59F.jpg`
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
