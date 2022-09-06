import { createTheme } from "@mui/material";
import MuiThemeProvider from "@mui/material/styles/ThemeProvider";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { createGlobalStyle } from "styled-components";
import Container from "@mui/material/Container";
import { useSelector } from "react-redux";
import { getDarkThemeStatus } from "store/reducer-and-action/helpers/helpers";

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tabletS: "650px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

const styledTheme = {
  media: {
    mobileS: size.mobileS,
    mobileM: size.mobileM,
    mobileL: size.mobileL,
    tabletS: size.tabletS,
    tablet: size.tablet,
    laptop: size.laptop,
    laptopL: size.laptopL,
    desktop: size.desktop,
    desktopL: size.desktop,
  },
};

const GlobalStyle = createGlobalStyle`
  body {
    background:${({ theme }) => theme.palette.background.default};
    color:${({ theme }) => theme.palette.text.primary};
    font-family: 'League Spartan', sans-serif;
    margin:0;
    padding: 0 30px;
   *{ ::-webkit-scrollbar {
       display: none;
       
       }
      -ms-overflow-style: none;  
      scrollbar-width: none;  
    }
    a{
      text-decoration: none;
      color:${({ theme }) => theme.palette.text.primary};
      :hover{
        color: ${({ theme }) => theme.palette.primary.main};

      }
      
    }
    @media (max-width: 425px) {
      padding: 0 20px;
    }
  }
`;

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0A1929",
      paper: "#0A1929",
    },
  },
});
const lightTheme = createTheme({
  palette: {
    mode: "light",
    divider: "#F5F5F5",
    background: {
      primary: "#1976d2",
    },
  },
});
const ThemeProvider = ({ children }) => {
  const darkThemeStatus = useSelector(getDarkThemeStatus);
  return (
    <MuiThemeProvider theme={darkThemeStatus ? darkTheme : lightTheme}>
      <GlobalStyle />
      <StyledThemeProvider theme={styledTheme}>
        <Container disableGutters maxWidth="xl">
          {children}
        </Container>
      </StyledThemeProvider>
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
