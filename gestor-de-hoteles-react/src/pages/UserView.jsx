import React from "react";
import { NombreContexto } from "../../Index";

export const UserView = () => {
  const { dataUser } = useContext(NombreContexto);
  const updateUser = async () => {
    try {
      let updateUser = {
        name: document.getElementById("inputName").value,
        surname: document.getElementById("inputSurname").value,
        username: document.getElementById("inputUsername").value,
        email: document.getElementById("inputEmail").value,
        phone: document.getElementById("inputPhone").value,
      };
      const { data } = await axios.put(
        `http://localhost:3200/user/update/${id}`,
        updateUser
      );
      console.log(product);
      alert(data.message);
    } catch (err) {
      alert(err.response.data.message);
    }
  };
  return (
    <>
      <h1>{title}</h1>
      <form className="m-5 text-center">
        <div className="mb-3">
          <label htmlFor="inputName" className="form-Label">
            Name
          </label>
          <input type="text" className="form-control" id="inputName" required />
        </div>

        <div className="mb-3">
          <label htmlFor="inputSurname" className="form-Label">
            Surname
          </label>
          <input
            type="text"
            className="form-control"
            id="inputSurname"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="inputUsername" className="form-Label">
            username
          </label>
          <input
            type="text"
            className="form-control"
            id="inputUsername"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="inputEmail" className="form-Label">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            id="inputEmail"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="inputPhone" className="form-Label">
            Phone
          </label>
          <input
            type="number"
            className="form-control"
            id="inputPhone"
            required
          />
        </div>

        <Link to="/product">
          <button
            onClick={(e) => {
              updateProduct();
            }}
            className="btn btn-success "
          >
            {" "}
            Add
          </button>
        </Link>
        <Link to="/product">
          <button className="btn btn-danger">Cancel</button>
        </Link>
      </form>
    </>
  );
};
