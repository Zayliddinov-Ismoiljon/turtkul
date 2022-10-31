import styled from "styled-components";

export const VacancyStyled= styled.div`
margin-top: 30px;
width: 100%;
padding: 0;

.vacancy__list{
  padding: 0;
  width: 100%;
}


/* .information{
  width: 100%;
  word-break: break-all;
} */

.vacancy-item-accordion{
  background-color: ${({ theme }) => theme.palette.background.default};

}

`;