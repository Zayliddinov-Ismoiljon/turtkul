import { Divider, ListItem, List, ListItemButton } from "@mui/material";
import React from "react";
import { CustomPaper, Info, TimeTitle } from "./schedule.style";

const Schedule = ({ data }) => {
  return (
    <CustomPaper elevation={3}>
      <List>
        {data.map((event, index) => (
          <span key={event.time}>
            <Item time={event.time} info={event.info} />{" "}
            {index !== data.length - 1 && <Divider />}
          </span>
        ))}
      </List>
    </CustomPaper>
  );
};

export default Schedule;

const Item = ({ time, info }) => {
  const truncatedInfo = info.length > 90 ? info.slice(0, 90) + "..." : info;
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <TimeTitle>{time}</TimeTitle>
        <Info>{truncatedInfo}</Info>
      </ListItemButton>
    </ListItem>
  );
};
