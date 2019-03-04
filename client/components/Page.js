import React, { Component } from "react";
import styled, { injectGlobal, ThemeProvider } from "styled-components";
import Header from "./Header";
import Meta from "./Meta";

const theme = {
  red: "#FF0000",
  black: "#393939",
  grey: "#3a3a3a",
  lightgrey: "#e1e1e1",
  offwhite: "#ededed",
  maxWidth: "1000px",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.9)",
  lgMedia: "1300px"
};

injectGlobal`
    @font-face {
        font-family: 'radnika_next';
        src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
    }
    html {
        box-sizing: border-box;
        font-size: 10px;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    body {
        font-family: 'radnika_next';
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height: 2;
    }
    a {
        text-decoration: none;
        color: ${theme.black};
    }
`;

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Header />
          <Inner>{this.props.children}</Inner>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;
