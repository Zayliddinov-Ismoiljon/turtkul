import { FormControlLabel } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDarkThemeStatus,
  setDarkTheme,
} from "store/reducer-and-action/helpers/helpers";
import { MUISwitch } from "./switch.style";

const Switch = () => {
  const darkThemeStatus = useSelector(getDarkThemeStatus);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { checked } = event.target;
    dispatch(setDarkTheme(checked));
  };

  return (
    <FormControlLabel
      control={
        <MUISwitch
          sx={{ m: 1 }}
          checked={darkThemeStatus}
          onChange={handleChange}
        />
      }
    />
  );
};

export default Switch;
