import { List, ListItemButton } from "@mui/material";
import { Title } from "components/swiper-imgs/swiper.style";
import { ItemWrapper } from "components/swiper-imgs/swiper.style";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { getNavbarData } from "store/reducer-and-action/language/language";

const LeftContent = () => {
  // return (
  //   <List>
  //     {LeftData.map((item, id) => (
  //       <ListItemButton key={id} style={{ padding: 0 }}>
  //         <ItemWrapper>{item}</ItemWrapper>
  //       </ListItemButton>
  //     ))}
  //   </List>
  const location = useLocation().pathname;
  const currentList = useSelector(getNavbarData).find((part) =>
    location.includes(part.link)
  );

  if (currentList)
    return (
      <div>
        <Title>{currentList.head}</Title>
        <List disablePadding>
          {currentList.list.map((item) => (
            <Link to={`${currentList.link}/${item.route}`} key={item.route}>
              <ListItemButton
                disableGutters
                style={{ paddingTop: "0", paddingBottom: "0" }}
              >
                <ItemWrapper active={location.includes(item.route)}>
                  {item.title}
                </ItemWrapper>
              </ListItemButton>
            </Link>
          ))}
        </List>
      </div>
    );
};

export default LeftContent;
