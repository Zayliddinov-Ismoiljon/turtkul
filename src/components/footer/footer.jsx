import React, { useEffect, useState } from "react";
import {
  ImgWrapper,
  FooterTop,
  Right,
  Wrapper,
  Left,
  FooterBottom,
} from "./footer.style";
import logo from "assets/images/resoursesImgs/logo.png";
import CallIcon from "@mui/icons-material/Call";
import { useSelector } from "react-redux";
import { getFooterData } from "store/reducer-and-action/language/language";
import stiker from "assets/images/footerImg/stiker.PNG";
import { BASE_URL } from "api/config";

import './footer.css'

const Footer = () => {
  const footerData = useSelector(getFooterData);

  const [footer, setFooter]= useState([]);
  useEffect(()=>{
    const options={
      method:'GET',
      headers:{}
    }

    fetch(`${BASE_URL}home/footer/`, options)
    .then(response=>response.json())
    .then(data=>{setFooter(data)})
  },[])
  return (
    <Wrapper>
      {/* <FooterTop>
        <Left>
          <ImgWrapper>
            <img src={logo} alt="logo" />
          </ImgWrapper>
          <div>
            <h3>{footerData.title}</h3>
            <p>{footerData.location}</p>
          </div>
        </Left>
        <Right>
          <p>{footerData.requirement}</p>
          <p>
            {footerData.contact}: <CallIcon fontSize="small" /> 71 210-01-63
            <br />
            {footerData.acceptanceTime}, 09:00 - 18:00
          </p>
        </Right>
      </FooterTop>

      <FooterBottom>
        <p>{footerData.copyright}</p>
        <img src={stiker} alt="no img" />
      </FooterBottom> */}
							<p style={{display:'flex'}} dangerouslySetInnerHTML={{ __html: `${footer.footer}` }} />
    </Wrapper>
  );
};

export default Footer;
