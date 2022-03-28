import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { API_URL } from "../../../utlity/config";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const IsAdmin = ({children}) => {
  const { register, handleSubmit } = useForm();
  const [admin, setAdmin] = useState(false);

  const onSubmit = (data) => {
    // console.log(data);
    const formData = new FormData();
    formData.append("email", data.email);
    fetch(`${API_URL}isAdmin`, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((admindata) => {
        if (admindata.length) {
          setAdmin(true);
        } else {
          notifyError();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  function notifyError() {
    toast.error(
      "Opps! you aren't admin. Only admin have an access on this page.",
      {
        transition: Zoom,
      }
    );
  }
  return (
    <div className="container">
       <div style={{height:'10vh'}}> </div>
      {admin ? (
       children
      ) : (
        <>
          <h5 className="alert alert-warning">
            Are you admin? If yes, please enter your email id.
          </h5>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label for="titleEng">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter Your Email ...."
                {...register("email", { required: true })}
              />
            </div>
            <input className="btn btn-primary mt-3" type="submit" />
          </form>
        </>
      )}
      <ToastContainer />
    </div>
  );
};

export default IsAdmin;
