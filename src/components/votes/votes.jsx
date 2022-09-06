import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Wrapper } from "./votes.style";
import "react-sweet-progress/lib/style.css";
import Title from "components/title";
import VotesItems from "./votes-items";
import {
  fetchVotes,
  postVote,
  getVotes,
} from "store/reducer-and-action/votes/votesSlice";
import getUUID from "utils/getUUID";

const Votes = ({ votes }) => {
  const dispatch = useDispatch();
  const [data, voting] = useSelector(getVotes);

  useEffect(() => {
    dispatch(fetchVotes());
  }, [dispatch]);
  useEffect(() => {}, [data, voting]);

  const onVote = (isAgreed, itemID) => {
    let ID = localStorage.getItem("uuid");
    if (!ID) {
      ID = getUUID(10);
      localStorage.setItem("uuid", ID);
    } else {
      dispatch(
        postVote({
          id: itemID,
          ip: ID + itemID,
          tr: isAgreed,
          fl: !isAgreed,
          vote: itemID,
        })
      );
    }

    dispatch(fetchVotes());
  };
  return (
    <>
      <Title text={votes.title} />
      <Wrapper>
        <VotesItems
          votes={data}
          onVote={onVote}
          voting={voting}
          btnsLanguage={votes.votes}
        />
      </Wrapper>
    </>
  );
};

export default Votes;
