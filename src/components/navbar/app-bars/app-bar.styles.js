import { alpha, styled as styledMUI } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { ListItem } from "@mui/material";
import Box from "@mui/material/Box";
import styled from "styled-components";

export const SearchInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const BoxStyled = styledMUI(Box)(({ theme }) => ({
  flexGrow: 1,
  "& .app-bar-item:hover": {
    backgroundColor: "#1976d2",
    color: "#fff",
  },
}));

export const AppBarItemText = styledMUI(ListItem)(({ theme }) => ({
  flexGrow: 1,
  display: { xs: "none", sm: "block" },
  color: theme.palette.primary.main,
  fontSize: "18px",
}));

export const Search = styledMUI("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  margin: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: "auto",
  },
}));

export const SearchIconWrapper = styledMUI("div")(({ theme }) => ({
  height: "100%",
  padding: "6.5px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  border: "1px solid #ddd",
  borderRadius: "5px",
  "&:hover": {
    transition: ".4s",
    backgroundColor: theme.palette.background.primary,
    color: theme.palette.divider,
  },
}));

export const StyledInputBase = styledMUI(TextField)(({ theme }) => ({
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `1em`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
