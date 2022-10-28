import styled from "styled-components";

export const  ManageOrganizationStyled= styled.div`
  margin-top: 30px;
  @media (max-width: ${(props) => props.theme.media.laptop}) {
    text-align: center;
    .modalBtn{
      width: 100%;
    }
  }
`;