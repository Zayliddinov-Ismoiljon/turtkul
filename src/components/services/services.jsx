import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaBus, FaMapMarkedAlt } from "react-icons/fa";
import { HiDocumentSearch } from "react-icons/hi";
import { AiFillQuestionCircle } from "react-icons/ai";
import { FcIdea } from "react-icons/fc";
import {
  Comment,
  CommentsWrapper,
  Service,
  ServiceCard,
  ServiceWrapper,
  SwiperItem,
  Wrapper,
} from "./services.style";
import Title from "components/title";

const Services = ({ services, comments }) => {
  const optimazedData = services.data.map((service, index) => ({
    icon: iconArray[index],
    text: service,
  }));
  return (
    <Wrapper>
      <Service>
        <Title text={services.title} />
        <ServiceWrapper>
          {optimazedData.map((item, id) => {
            return (
              <ServiceCard key={id}>
                {item.icon}
                <p>{item.text}</p>
              </ServiceCard>
            );
          })}
        </ServiceWrapper>
      </Service>
      <CommentsWrapper>
        <Title text={comments.title} />
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          // style={{ boxShadow: "0 0 20px #606060", marginTop: "20px" }}
        >
          {comments.data.map((item, id) => {
            return (
              <SwiperSlide key={id} style={{ cursor: "pointer" }}>
                <SwiperItem>
                  <p style={{ fontWeight: "bold" }}>{item.name}</p>
                  <Comment>{item.comment}</Comment>
                  <p style={{ color: "blue" }}>{item.date}</p>
                </SwiperItem>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </CommentsWrapper>
    </Wrapper>
  );
};

export default Services;

const iconArray = [
  <HiDocumentSearch />,
  <FaBus />,
  <AiFillQuestionCircle />,
  <FcIdea />,
  <FaMapMarkedAlt />,
];
