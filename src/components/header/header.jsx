import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import HeaderNewsItem from "./header-news-item";
import Divider from "@mui/material/Divider";
import { Wrapper } from "./header.styles";
import {
  getNewsData,
  setActiveFilter,
} from "../../store/reducer-and-action/news/newsSlice";
import Skeleton from "@mui/material/Skeleton";
import { getNewsStatus } from "store/reducer-and-action/news/newsSlice";
import Contacts from "components/contacts/contacts";

const Header = () => {
  const news = useSelector(getNewsData);
  const pending = useSelector(getNewsStatus);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setActiveFilter("news/all"));
  }, []);

  const WaitingNews = ({ id }) => {
    return !news || pending ? (
      <Skeleton
        animation="wave"
        variant="rectangular"
        width="100%"
        height="400px"
      />
    ) : (
      <HeaderNewsItem news={news[id]} />
    );
  };
  return (
    <Wrapper>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={7} md={6}>
          <br />
          <Divider />
          <br />
          <WaitingNews id={0} />
        </Grid>
        <Grid item xs={12} sm={5} md={3}>
          <br />
          <Divider />
          <br />
          <WaitingNews id={1} />
          <WaitingNews id={2} />
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <br />
          <Divider />
          <br />
          <WaitingNews id={3} />
          <WaitingNews id={4} />
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default Header;
