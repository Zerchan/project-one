import Link from "next/link";
import Router from "next/router";
import NProgress from "nprogress";
import styled from "styled-components";
import Nav from "./Nav";

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  NProgress.done();
};

const Logo = styled.h1`
  font-size: 4rem;
  margin: 0 2rem;
  text-align: center;
  z-index: 2;

  a {
    padding: 0.5rem 1rem;
    margin: 0;
    text-transform: uppercase;
    text-decoration: none;
  }
`;

const StyledHeader = styled.header`
  .bar {
    border-bottom: 10px solid ${({ theme }) => theme.black};
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: stretch;
  }
`;

const Header = () => (
  <StyledHeader>
    <div className="bar">
      <Logo>
        <Link href="/">
          <a>One</a>
        </Link>
      </Logo>
      <Nav />
    </div>
    {/*<div className="sub-bar">
      <p>Search</p>
    </div>
<div>Cart</div>*/}
  </StyledHeader>
);

export default Header;
