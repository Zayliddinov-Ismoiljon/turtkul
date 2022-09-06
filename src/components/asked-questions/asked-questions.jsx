import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Title, Wrapper } from "./asked-questions.style";
import { QuestionsData } from "./questions-data";

const AskedQuestions = () => {
  return (
    <>
      <Title>Ko'p beriladigan savollar</Title>
      <Wrapper>
        {QuestionsData.map((question, id) => (
          <Accordion key={id}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={question.id}
              id={question.id}
            >
              <Typography>{question.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{question.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Wrapper>
    </>
  );
};

export default AskedQuestions;
