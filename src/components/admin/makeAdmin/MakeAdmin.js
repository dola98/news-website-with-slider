import React from "react";
import IsAdmin from "../isAdmin/IsAdmin";
import { useForm } from "react-hook-form";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_URL } from "../../../utlity/config";

const MakeAdmin = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
     console.log(data);
    const formData = new FormData();
    formData.append("email", data.email);
    fetch(`${API_URL}addAdmin`, {
      method: "POST",
      body: formData,
    })
      .then((response) =>  notifySuccess())
      .catch((error) => {
        console.log(error);
        notifyError();
      });
  };

  function notifyError() {
    toast.error("Opps! something went wrong.", {
      transition: Zoom,
    });
  }
  function notifySuccess() {
    toast.info("Admin successfully added", {
      transition: Zoom,
    });
  }

  return (
    <IsAdmin>
      <div>
        <div>
          <form  className="mt-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label for="titleEng">Make Admin</label>
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
        </div>
        <div>
          
        </div>
      </div>
    </IsAdmin>
  );
};

export default MakeAdmin;
