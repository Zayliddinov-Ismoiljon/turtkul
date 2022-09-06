import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineDisconnect } from "react-icons/ai";
import { Wrapper, Left, Right } from "./spec-menu.styles";
import { Link } from "react-router-dom";
import { LangSelect } from "./lang-select";
import SwitchTheme from "components/switch/switch";
import { useMediaQuery } from "@mui/material";

const SpecMenu = () => {
  const match = useMediaQuery("(min-width:915px)");

  return (
    <Wrapper>
      <Left>
        <div>
          <AiOutlineMail />
          <span>
            <a href="mailto:turtkul-gov@gmail.com">
              &nbsp; turtkul-gov@gmail.com
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
              <span>&nbsp; +998 99 999 99 99</span>
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
