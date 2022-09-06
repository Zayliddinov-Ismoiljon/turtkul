import Button from "@mui/material/Button";
import React from "react";
import { BiDislike, BiLike } from "react-icons/bi";
import { Progress } from "react-sweet-progress";
import { IconsWrapper, Like, Vote, VoteBody, VoteCard } from "./votes.style";

const VotesItems = ({ votes = [], onVote, voting, btnsLanguage }) => {
  if (votes.length === 0) {
    return "Loading...";
  }
  let disabledVotes = localStorage.getItem("disabledVotes");
  disabledVotes = JSON.parse(disabledVotes);

  return (
    <>
      {votes.map((item) => {
        return (
          <VoteCard key={item.id}>
            <h4>{item.title}</h4>
            <VoteBody>{item.text}</VoteBody>
            <Progress
              percent={
                Math.floor(
                  (item.sumagree / (item.sumagree + item.sumdisagree)) * 100
                ) || 0
              }
            />
            <IconsWrapper>
              <Like>
                <Vote>
                  <Button
                    variant="outlined"
                    color="success"
                    size="small"
                    disabled={disabledVotes?.includes(item.id) || voting}
                    onClick={() => onVote(true, item.id)}
                  >
                    {btnsLanguage.yes}
                    <BiLike style={{ color: "green" }} />
                  </Button>
                </Vote>
                <Vote>
                  <Button
                    color="error"
                    variant="outlined"
                    disabled={disabledVotes?.includes(item.id) || voting}
                    onClick={() => onVote(false, item.id)}
                  >
                    <BiDislike style={{ color: "red" }} />
                    {btnsLanguage.no}
                  </Button>
                </Vote>
              </Like>
            </IconsWrapper>
          </VoteCard>
        );
      })}
    </>
  );
};

export default VotesItems;
