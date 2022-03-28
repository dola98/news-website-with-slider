import React, { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../../App";
import { useNews } from "../../hooks/useNews";
import NewsCarousel from "../carousel/NewsCarousel";
import Footer from "../footer/Footer";
import NewsSection from "../newsSection/NewsSection";

const Home = () => {
  const [titleEng, setTitleEng] = useState('');
  const [titleBang, setTitleBang] = useState('');
  const news = useNews();
  const [isEnglish, setEnglish] = useContext(LanguageContext);

  useEffect(() => {

    if (news) {
      (() => {
        news.map((item) => {
          setTitleEng(prev=> prev +  "**" + item.titleEng + ' ');
          setTitleBang(prev=> prev +  "**" + item.titleBang + ' ');
        });
      })();
    }
  }, [news]);
  return (
    <>
      <div className="container mb-5">
         <NewsCarousel news={news} />
        <div
          style={{
            height: "10vh",
            marginTop: "20px",
            borderTop: "1px solid gray",
            borderBottom: "1px solid gray",
          }}
        >
          <marquee width="" direction="left" className="alert alert-danger text-black">
          {
            (titleEng && titleBang) &&
            isEnglish ? titleEng : titleBang
          }
         
          </marquee>
        </div>
      </div>
      <NewsSection news={news} />
      <Footer />
    </>
  );
};

export default Home;
