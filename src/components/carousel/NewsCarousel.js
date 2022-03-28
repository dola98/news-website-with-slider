import React, { useContext } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { LanguageContext } from "../../App";
import Spinner from "../shared/Spinner";
import { useNavigate } from 'react-router-dom';

const NewsCarousel = ({news}) => {
  const [isEnglish, setEnglish] = useContext(LanguageContext);
  const navigate = useNavigate();
  
  const handleClick = (id) => {
    // console.log(id)
    navigate(`/view/${id}`);
}
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 769 },
      items: 3,
    },
    mintablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="mt-2">
      <div style={{ height: "10vh" }}> </div>
      {news ? (
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlaySpeed={2000}
          transitionDuration={500}
        >
          {news.map((item) => (
            <div
              key={item._id}
              className="card"
              style={{ width: "18rem", height: "70vh" }}
            >
              <img
                className="card-img-top"
                style={{ height: "60%" }}
                src={`data:image/png;base64,${item.image.img}`}
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title">
                  {isEnglish ? item.titleEng : item.titleBang}
                </h5>
                <a className="btn btn-primary mt-2"   onClick={()=>handleClick(item._id)}>
                  {isEnglish ? "Learn More" : "আরও জানুন"}
                </a>
              </div>
            </div>
          ))}
        </Carousel>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default NewsCarousel;
