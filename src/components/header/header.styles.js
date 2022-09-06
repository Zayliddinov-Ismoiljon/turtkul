import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 1rem;
`;
export const HeaderNewsItemWrapper = styled.div`
  background-color: ${({ theme }) => theme.palette.background.default};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  & .card-info {
    padding: 0 0 10px 10px;
  }
  border-radius: 5px;
  figure {
    position: relative;
    display: inline-block;
    margin: 0;
    width: 100%;
    max-width: 100%;
    background-color: #2266a5;
    color: #fff;
    overflow: hidden;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }

  figure > img {
    vertical-align: top;
    width: 100%;
    max-width: 100%;
  }

  figure figcaption {
    background-color: #135796;
    padding: 30px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.5;
  }

  figure,
  figure:before,
  figure:after,
  figure *,
  figure *:before,
  figure *:after {
    box-sizing: border-box;
    transition: all 0.35s ease;
  }

  /** fade **/
  figure figcaption {
    opacity: 0;
  }
  figure:hover figcaption {
    opacity: 0.5;
    cursor: pointer;
  }

  figure:hover > img,
  figure:hover figcaption {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0) scale(1.1);
  }

  /** fade-in-down **/
  figure figcaption {
    -webkit-transform: translate(0, -15%);
    transform: translate(0, -15%);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure figcaption p {
    font-size: 30px;
  }
`;
