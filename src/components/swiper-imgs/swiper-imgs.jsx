import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Box, Title, Wrapper } from "./swiper.style";

const SwiperImgs = ({ title = "", images = [], body = "" }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Box>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
          style={{ display: "flex", alignItems: "center" }}
        >
          {images.map((img, id) => (
            <SwiperSlide key={id}>
              <img src={img} alt="swiper-img" style={{ width: "100%" }} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      <p>{body}</p>
    </Wrapper>
  );
};

export default SwiperImgs;
