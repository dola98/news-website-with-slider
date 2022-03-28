import React, { useContext } from "react";
import { LanguageContext } from "../../App";
import { useNews } from "../../hooks/useNews";
import { useNavigate } from 'react-router-dom';
import Spinner from "../shared/Spinner";
import '../../App.css'
const NewsSection = ({news}) => {
  const [isEnglish, setEnglish] = useContext(LanguageContext);
  const navigate = useNavigate();
  // const news = useNews();

  const handleClick = (id) => {
    // console.log(id)
    navigate(`/view/${id}`);
}

  return (
    <div className="row">
      {news ? (
        news.map((item) => (
            <div key={item._id}
             style={{cursor:'pointer'}} 
              className="col-md-3 mb-4 ml-3 boxShadow" 
              onClick={()=>handleClick(item._id)}>
              <div className="card mt-5" style={{height: "60vh" }}>
                <img
                  className="card-img-top"
                  src={`data:image/png;base64,${item.image.img}`}
                  style={{ height: "60%" }}
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text">
                    {isEnglish ? item.titleEng : item.titleBang}
                  </p>
                </div>
              </div>
            </div>
        ))
      ) : (
        <Spinner/>
      )}
    </div>
  );
};

export default NewsSection;
