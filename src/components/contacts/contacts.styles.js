import styled from "styled-components";

export const ContactsStyled = styled.div`
  padding-top: 40px;
  .govMapsContainer {
    overflow: hidden;
    position: relative;
    .govMaps {
      height: 550px;
      & > div {
        position: absolute;
        top: -550px;
      }
    }
  }
`;
