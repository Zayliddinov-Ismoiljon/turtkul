import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #e8e8e873;
  height: 57px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  @media screen and (max-width:915px) {
    padding: 0 0;
    font-size: 15px;
    & > div {
      box-sizing: border-box;
      width: auto;
    }
  }
  & Link {
    text-decoration: none;
  }
`;

export const Left = styled.div`
  width: 55%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Right = styled.div`
  width: 40%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;
