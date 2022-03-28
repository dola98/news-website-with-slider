import React from "react";

const NotFound = () => {
  return (
    <div className="container">
      <div className="row">
        <div>
          <div className="mt-5 p-5 alert alert-danger" role="alert">
            <h4 className="alert-heading">404 Error!</h4>
            <p></p>
            <hr />
            <p className="mb-0">Page Not Found. Please make sure the URL.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
