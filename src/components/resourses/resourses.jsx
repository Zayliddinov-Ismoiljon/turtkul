import React, { useEffect, useState } from "react";
import Title from "components/title";
import { Card, CardWrapper } from "./resourses.style";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Resourses = ({ resourses }) => {
  const [cardsCount, setCardsCount] = useState(5);

  const checkSize = (width) => {
    if (width > 1024) setCardsCount(5);
    else if (width > 900) setCardsCount(4);
    else if (width > 700) setCardsCount(3);
    else if (width > 525) setCardsCount(2);
    else setCardsCount(1);
  };

  useEffect(() => {
    checkSize(window.innerWidth);
    window.addEventListener("resize", () => checkSize(window.innerWidth));
  }, []);

  return (
    <>
      <Title text={resourses.title} />
      <Swiper
        spaceBetween={20}
        slidesPerView={cardsCount}
        style={{ padding: "0 20px" }}
      >
        {resourses.cards.map((item, id) => {
          return (
            <SwiperSlide key={id}>
              <CardWrapper>
                <Card>
                  <img src={item.logo} alt="event-card-img" />
                  <h4>{item.name}</h4>
                  <p>{item.website}</p>
                </Card>
              </CardWrapper>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Resourses;
