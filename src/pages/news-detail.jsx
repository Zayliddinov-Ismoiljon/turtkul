import SwiperImgs from "components/swiper-imgs/swiper-imgs";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getNewsData } from "store/reducer-and-action/news/newsSlice";

const NewsDetail = () => {
  let params = useParams();
  const currentNews = useSelector(getNewsData)?.find(
    (news) => news.id === +params.newsId
  );
  return (
    <div>
      <SwiperImgs {...currentNews} />
    </div>
  );
};

export default NewsDetail;
