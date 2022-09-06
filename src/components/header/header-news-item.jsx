import React from "react";
import { HeaderNewsItemWrapper } from "./header.styles";

const HeaderNewsItem = ({ news }) => {
  return (
    <>
      <HeaderNewsItemWrapper>
        <figure>
          <img src={news?.imagesown} alt="news" />
          <figcaption>
            <p>{"Batafsil" || "More..."}</p>
          </figcaption>
        </figure>
        <div className="card-info">
          <p>{news?.title}</p>
          <p>{news?.date}</p>
        </div>
      </HeaderNewsItemWrapper>
    </>
  );
};

export default HeaderNewsItem;
