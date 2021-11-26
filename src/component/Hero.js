import React from "react";
import logo from "../assets/Welcome To Delicakes-01.png";
import bg from "../assets/BACKGROUND PERTAMA-01.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper-bundle.min.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

function Hero() {
  const data = [logo, logo, logo];
  return (
    <div id="hero" className="my-10">
      <div
        className="hero mx-auto flex items-center"
        style={{ width: "70%", height: 360 }}
      >
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="h-full"
        >
          {data.map((value, index) => {
            return (
              <SwiperSlide>
                <div
                  key={index}
                  className="flex justify-center h-full items-center"
                >
                  <img src={value} style={{ width: "70%" }} />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default Hero;
