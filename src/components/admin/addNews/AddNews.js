import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_URL } from "../../../utlity/config";

const AddNews = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    const formData = new FormData();
    formData.append("titleEng", data.titleEng);
    formData.append("titleBang", data.titleBang);
    formData.append("descriptionEng", data.DescriptionEng);
    formData.append("descriptionBang", data.DescriptionBang);
    formData.append("file", data.file[0]);

    fetch(`${API_URL}addNews`, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
          if(response){
            notifySuccess();
          }
        })
    //   .then((data) => {
    //     if (data) {
    //         console.log(data)
    //         notifySuccess();
    //     }
    //   })
      .catch((error) => {
        notifyError();
      });
  };
  function notifySuccess() {
    // notification for success
    toast.info("News successfully added", {
      transition: Zoom,
    });
  }
  function notifyError() {
    // notification for error
    toast.error("Opps! something went wrong.", {
      transition: Zoom,
    });
  }
  return (
    <div className="container mt-1">
      <h5 className="alert alert-warning">Add News ....</h5>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label for="titleEng">English Title</label>
          <input
            type="text"
            className="form-control"
            id="titleEng"
            placeholder="English News Title ...."
            {...register("titleEng", { required: true })}
          />
        </div>
        <div className="form-group">
          <label for="titleBang">Bangle Title</label>
          <input
            type="text"
            className="form-control"
            id="titleBang"
            placeholder="বাংলা সংবাদ শিরোনাম ...."
            {...register("titleBang", { required: true })}
          />
        </div>
        <div className="form-group">
          <label for="DescriptionEng">English Description</label>
          <textarea
            class="form-control"
            id="DescriptionEng"
            rows="3"
            {...register("DescriptionEng", { required: true })}
            placeholder="English Description ...."
          ></textarea>
        </div>
        <div className="form-group">
          <label for="DescriptionBang">Bangla Description</label>
          <textarea
            class="form-control"
            id="DescriptionBang"
            rows="3"
            {...register("DescriptionBang", { required: true })}
            placeholder="বাংলা বর্ণনা ...."
          ></textarea>
        </div>
        <div className="form-group mt-2">
          <input
            type="file"
            class="custom-file-input"
            id="file"
            required
            {...register("file", { required: true })}
          />
        </div>
        <input className="btn btn-primary mt-3" type="submit" />
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddNews;
