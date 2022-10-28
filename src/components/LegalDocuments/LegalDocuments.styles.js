import styled from "styled-components";

export const LegalDocumentsStyled= styled.div`
margin-top: 30px;

.document-card{
  width: 100%;
  word-break: break-all;
	background-color: ${({ theme }) => theme.palette.background.default};
  /* color: ${({ theme }) => theme.palette.primary.main}; */
}
`;