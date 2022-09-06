import React from "react";
import styled from "styled-components";

export const Text = styled.h1`
  color: ${({ theme }) => theme.palette.primary.main};
  border-bottom: 1px solid #909090;
  padding-bottom: 20px;
  margin-bottom: 0;
`;

const Title = ({ text }) => {
  return <Text>{text}</Text>;
};

export default Title;
