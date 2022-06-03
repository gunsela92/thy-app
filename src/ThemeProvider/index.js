import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import InterLight from "../assets/fonts/Inter/Inter-Light-BETA.otf";
import InterBold from "../assets/fonts/Inter/Inter-Bold.otf";
import Inter from "../assets/fonts/Inter/Inter-Regular.otf";
import InterItalic from "../assets/fonts/Inter/Inter-Italic.otf";
import InterSemibold from "../assets/fonts/Inter/Inter-SemiBold.otf"
import PropTypes from "prop-types";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Interregular';
    src: url(${Inter});
  }
  @font-face {
    font-family: 'Interlight';
    src: url(${InterLight});
  }
  @font-face {
    font-family: 'Interbold';
    src: url(${InterBold});
  }
  @font-face {
    font-family: 'Interitalic';
    src: url(${InterItalic});
  }
  @font-face {
    font-family: 'InterSemibold';
    src: url(${InterSemibold});
  }
  #root, html, body, main {
    height: 100%;
  }
  body {
    font-family: ${({ theme }) => theme.fonts.regular};
    margin: 0;
  }
  /* ScrollBar */
  :not(html):not(body)::-webkit-scrollbar {width: 7px;height: 3px;}
  :not(html):not(body)::-webkit-scrollbar-track {border-radius: 3.5px;background-color: transparent; }
  :not(html):not(body)::-webkit-scrollbar-thumb {background: ${({ theme }) => theme.colors.infoColor};border-radius: 3.5px;}
  :not(html):not(body)::-webkit-scrollbar-thumb:hover {background: ${({ theme }) => theme.colors.infoColor};}
  * {-webkit-overflow-scrolling:touch; -ms-overflow-style: -ms-autohiding-scrollbar; }
  /* ScrollBar */
`;

const breakPoints = {
  xs: 468,
  sm: 600,
  m: 768,
  md: 900,
  lg: 1200,
  xl: 1536,
};

const theme = {
  colors: {
    white: "#FFFFFF",
    black: "#000000",
    red: "#FF0000",
    selectionColor: "rgba(96,105,119, 60%)",
    flightSelection: "#E81932",
    headerColor: "#f9f9f9",
    buttonColor: "#232A3A",
    gray: "#b0b0b0",
  },
  shadow: "0 4px 8px 0 rgba(0,0,0,.05)",
  backgrounds: {
    mainBackground: "#063048",
  },
  fonts: {
    regular: "Interregular",
    light: "Interlight",
    bold: "Interbold",
    italic: "Interitalic",
    semibold: "Intersemibold",
  },
  fontSizes: {
    extraSmall: "10px",
    tiny: "12px",
    small: "14px",
    medium: "16px",
    large: "18px",
    extraLarge: "20px",
    title: "24px"
  },
  breakPoints,
};

const MainThemeProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

MainThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainThemeProvider;