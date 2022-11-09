import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineDisconnect } from "react-icons/ai";
import { Wrapper, Left, Right } from "./spec-menu.styles";
import { Link } from "react-router-dom";
import { LangSelect } from "./lang-select";
import SwitchTheme from "components/switch/switch";
import { useMediaQuery } from "@mui/material";
import { useEffect } from "react";
import { BASE_URL } from "api/config";

const SpecMenu = () => {
  const match = useMediaQuery("(min-width:915px)");

  const [menuEmail, setMenuEmail]= useState([]);

  useEffect(()=>{
    const options={
      method:'GET',
      headers:{}
    }

    fetch(`${BASE_URL}home/footer/`, options)
    .then(response=> response.json())
    .then(data=> {setMenuEmail(data); console.log('dataEmail', data)})
  },[])

  return (
    <Wrapper>
      <Left>
        <div>
          <AiOutlineMail />
          <span>
            <a href="mailto:turtkul-gov@gmail.com">
              &nbsp; {menuEmail.email}
            </a>
          </span>
        </div>
        {match && (
          <>
            <div>
              <GoLocation />
              <span>
                <Link to="/">&nbsp;Toshkent shahri, I.Karimov kochasi, 51</Link>
              </span>
            </div>
            <div>
              <BsTelephone />
              <span>&nbsp; {menuEmail.number}</span>
            </div>
          </>
        )}
      </Left>
      <Right>
        {match && (
          <>
            <SwitchTheme />
            <LangSelect />
          </>
        )}
        <div>
          <AiOutlineDisconnect />
          <span>
            <Link to="/contacts">&nbsp;Qayta bog'lanish</Link>
          </span>
        </div>
      </Right>
    </Wrapper>
  );
};

export default SpecMenu;
