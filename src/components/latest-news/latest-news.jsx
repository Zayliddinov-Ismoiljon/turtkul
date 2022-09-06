import { Divider } from "@mui/material";
import Title from "components/title";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchNews,
  getNewsData,
} from "store/reducer-and-action/news/newsSlice";
import { Wrapper } from "./latest-news.style";
import News from "./news/news";
import Schedule from "./schedule/schedule";

const LatestNews = ({ news, plan }) => {
  const dispatch = useDispatch();
  const newsData = useSelector(getNewsData);

  // useEffect(() => {
  //   dispatch(fetchNews("all_news"));
  // }, [dispatch]);

  return (
    <Wrapper>
      <div>
        <Title text={news.title} />
        <News newsData={newsData} />
      </div>
      <div>
        <Title text={plan.title} />
        <Schedule data={plan.data} />
      </div>
    </Wrapper>
  );
};

export default LatestNews;
