import React from "react";
import category from "../assets/kategori-01.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import cupCakes from "../assets/CUPE CAKES-01.png";
import cakes from "../assets/CAKES-01.png";
import pastry from "../assets/PASTRY-01.png";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper-bundle.min.css";
import { Navigation, A11y } from "swiper";

function Category() {
  const data = [
    { cupCakes, cakes, pastry },
    { cupCakes, cakes, pastry },
    { cupCakes, cakes, pastry },
  ];
  return (
    <div id="category" className="flex flex-col items-center ">
      <img src={category} style={{ width: "50%" }} />

      <div
        className="flex py-10 justify-center items-center"
        style={{ width: "80%" }}
      >
        <Swiper
          modules={[Navigation, A11y]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {data.map((val, index) => {
            return (
              <SwiperSlide>
                <div key={index} className="flex justify-center">
                  <div>
                    <div
                      style={{
                        width: 260,
                        height: 320,
                      }}
                      className="px-4 bg-white border-2 border-black rounded-custom flex items-center"
                    >
                      <img src={val.cupCakes} style={{ width: "100%" }} />
                    </div>
                    <p className="text-center mt-8 font-bold text-xl">
                      CUPCAKES
                    </p>
                  </div>

                  <div>
                    <div
                      style={{
                        width: 260,
                        height: 320,
                      }}
                      className="px-4 mx-12 bg-white border-2 border-black rounded-custom flex items-center"
                    >
                      <img src={val.cakes} style={{ width: "100%" }} />
                    </div>
                    <p className="text-center mt-8 font-bold text-xl">CAKES</p>
                  </div>

                  <div>
                    <div
                      style={{
                        width: 260,
                        height: 320,
                      }}
                      className="px-4 bg-white border-2 border-black rounded-custom flex items-center"
                    >
                      <img src={val.pastry} style={{ width: "100%" }} />
                    </div>
                    <p className="text-center mt-8 font-bold text-xl">PASTRY</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default Category;
