import { BASE_URL } from "api/config";
import Title from "components/title";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchEvents,
  getEvents,
} from "store/reducer-and-action/events/eventsSlice";
import { getActiveLanguageName } from "store/reducer-and-action/language/language";
import { Wrapper, CardText, CardWrapper } from "./events.style";

const Events = () => {
  const dispatch = useDispatch();
  // const data = useSelector((state) => state.events.events);
  const events = useSelector(getEvents);
  const currLanguage = useSelector(getActiveLanguageName);

  useEffect(() => {
    dispatch(fetchEvents(currLanguage));
  }, [currLanguage]);

  return (
    <>
      <Title text={events.title} />
      <Wrapper>
        {events.map((item) => {
          return (
            <CardWrapper key={item.id}>
              <img src={BASE_URL + item.imagesown} alt="event-card-img" />
              <CardText>{item.body}</CardText>
            </CardWrapper>
          );
        })}
      </Wrapper>
    </>
  );
};

export default Events;
