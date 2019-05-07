import React, { Component } from "react";
import styled, { injectGlobal, ThemeProvider } from "styled-components";
import Header from "./Header";
import Meta from "./Meta";

const theme = {
  red: "#DB5461",
  black: "#221E22",
  green: "#5F9EA0",
  smalt: "#4E8283",
  orange: "#F5853F",
  linen: "#FAEEDE",
  lace: "#FBF4EA",
  maxWidth: "1400px",
  smMedia: "320px",
  mdMedia: "768px",
  lgMedia: "1224px",
  xlMedia: "1824px"
};

injectGlobal`
  @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
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
      font-size: 1.6rem;
      line-height: 2;
      color: ${theme.black};
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
