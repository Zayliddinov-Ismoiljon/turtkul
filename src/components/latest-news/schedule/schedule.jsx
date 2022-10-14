import { Divider, ListItem, List, ListItemButton } from "@mui/material";
import React from "react";
import { CustomPaper, Info, TimeTitle } from "./schedule.style";
import moment from "moment";

const Schedule = ({ data }) => {
  return (
    <CustomPaper elevation={3}>
      <List>
        { data?.length ? data?.map((event, index) => (
          <span key={index}>
            <Item xs={2} sm={4} md={4} lg={12} xl={12} time={moment(event?.date).locale("ru").format("MMMM Do")} info={event?.title} />{" "}
            {index !== data?.length - 1 ? <Divider /> : null}
          </span>
        )) : null}
      </List>
    </CustomPaper>
  );
};

export default Schedule;

const Item = ({ time, info }) => {
  const truncatedInfo = info?.length > 90 ? info.slice(0, 90) + "..." : info;
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <TimeTitle>{time}</TimeTitle>
        <Info>{truncatedInfo}</Info>
      </ListItemButton>
    </ListItem>
  );
};
