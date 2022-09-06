import styled from "styled-components";
import Tabs from "@mui/material/Tabs";

export const MuiTabs = ({ value, handleChange, children }) => {
  return (
    <Tabs
      TabIndicatorProps={{ sx: { display: "none" } }}
      sx={{
        "& .MuiTabs-flexContainer": {
          flexWrap: "wrap",
        },
      }}
      value={value}
      onChange={handleChange}
      aria-label="basic tabs example"
    >
      {children}
    </Tabs>
  );
};

export const Wrapper = styled.div``;

export const NewsWrapper = styled.div`
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.palette.text.primary};
  }

  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 50px;
  row-gap: 20px;
  margin: 20px 0;

  @media screen and (max-width: ${({ theme }) => theme.media.laptop}) {
    column-gap: 20px;
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;
export const NewsItemWrapper = styled.div`
  border-bottom: 1px solid silver;
  padding-bottom: 20px;
  & img {
    width: 100%;
  }

  :hover {
    color: ${({ theme }) => theme.palette.text.primary};
  }
`;
export const NewsInfo = styled.div`
  margin-left: 20px;
  & h4 {
    color: ${({ theme }) => theme.palette.primary.main};
    margin: 0;
  }

  h5 {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 0;
    svg {
      font-size: 20px;
    }
  }

  p {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  @media screen and (max-width: ${({ theme }) => theme.media.laptop}) {
    p {
      display: none;
    }

    h4 {
      margin-bottom: 20px;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.media.laptop}) {
    p {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
  @media screen and (max-width: 600px) {
    margin-left: 0;
    h4 {
      margin-top: 15px;
    }
  }
`;
