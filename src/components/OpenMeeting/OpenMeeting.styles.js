import styled from "styled-components";

export const OpenMeetingStyled= styled.div`
margin-top: 30px;

.meeting-img{
  width: 70%;
  display: block;
  border-radius: 10px;
  margin: 0 auto;
}

.meeting-title{
  color: blue;
  margin-top: 10px;
}

@media (max-width: ${({ theme }) => theme.media.laptop}) {
    .meeting-img{
      width: 100%;
    }

    .meeting-title{
      text-align: center;
    }
  }

`;