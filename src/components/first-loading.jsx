import React from "react";
import Hypnosis from "react-cssfx-loading/lib/Hypnosis";
import styled from "styled-components";
import logo from "assets/site-logo.png";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @keyframes scaling {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(2);
    }
  }
  .scalingImage {
    animation: scaling 5s infinite alternate;
  }

  div:nth-child(2) {
    width: 270px;
    height: 270px;
  }

  div:nth-child(3) {
    display: none !important;
  }

  img {
    width: 120px;
    height: 120px;
    position: absolute;
  }

  @media (max-width: 576px) {
    div:nth-child(2) {
      width: 150px;
      height: 150px;
    }

    img {
      width: 80px;
      height: 80px;
      position: absolute;
    }
  }
`;

const FirstLoading = () => {
  let num = 350;
  window.innerWidth > 576 ? (num = 350) : (num = 200);

  return (
    <Wrapper>
      <img className="scalingImage" src={logo} alt="" />
      <Hypnosis width={`${num}px`} height={`${num}px`} />
    </Wrapper>
  );
};

export default FirstLoading;
