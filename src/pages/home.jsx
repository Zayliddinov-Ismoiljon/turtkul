import Services from "components/services/services";
import React from "react";
import LatestNews from "components/latest-news/latest-news";
import Events from "components/events/events";
import Votes from "components/votes/votes";
import City from "components/city/city";
import Resourses from "components/resourses/resourses";
import { useSelector } from "react-redux";
import { getHomePageData } from "store/reducer-and-action/language/language";
import Header from "components/header/header";

const Home = () => {
  const homePageData = useSelector(getHomePageData);
  return (
    <div>
      <Header />
      <LatestNews news={homePageData.news} plan={homePageData.cityPlan} />
      <Events events={homePageData.events} />
      <Services
        services={homePageData.services}
        comments={homePageData.comments}
      />
      <Votes votes={homePageData.votes} />
      <City city={homePageData.city} />
      <Resourses resourses={homePageData.resourses} />
    </div>
  );
};

export default Home;
