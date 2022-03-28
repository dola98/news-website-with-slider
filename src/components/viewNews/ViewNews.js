import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LanguageContext } from "../../App";
import { API_URL } from "../../utlity/config";

const ViewNews = () => {
  const [isEnglish, setEnglish] = useContext(LanguageContext);
  const { id } = useParams();
  const [news, setNews] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}getNewsById?id=` + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setNews(data);
      });
  }, [id]);

  return (
    <div>
      {news ? (
        <div className="container">
          <div className="row mt-5">
            <div className="card mb-3 mt-3">
              <img
                className="card-img-top"
                src={`data:image/png;base64,${news.image.img}`}
                alt=""
                style={{ height: "60vh" }}
              />
              <div className="card-body">
                <h5 className="card-title">   {isEnglish ? news.titleEng : news.titleBang}</h5>
                <p className="card-text"> {isEnglish ? news.descriptionEng : news.descriptionBang}{}</p>
                <p className="card-text">
                  <small className="text-muted">Last updated 30 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading .....</div>
      )}
    </div>
  );
};

export default ViewNews;
