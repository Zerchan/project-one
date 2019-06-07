import Link from "next/link";
import Router from "next/router";
import NProgress from "nprogress";
import styled from "styled-components";
import Nav from "./Nav";
import useUser from './useUser';

NProgress.configure({ showSpinner: false });

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  NProgress.done();
};

const UIBtns = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const UIBtn = styled.a`
  color: ${({theme:{colors}}) => colors.lace};
  font-size: 3.0rem;
  width: 60px;
  height: 60px;
  text-align: center;
  padding: 0 ${({theme}) => theme.spaces[2]}px;
`;

const StyledHeader = styled.header`
  .bar {
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: stretch;
    background-color: ${({theme:{colors}}) => colors.green};
    min-height: 60px;
  }
`;

const Header = () => {
  const { data } = useUser();
  
  return (
    <StyledHeader>
      <div className="bar">
        <UIBtns>
          {data && 
            <>
              <Link href="/">
                <UIBtn><i className="icofont-navigation-menu"></i></UIBtn>
              </Link>
              <Link href="/">
                <UIBtn><i className="icofont-ui-user"></i></UIBtn>
              </Link>
            </>
          }
        </UIBtns>
        <Nav />
      </div>
    </StyledHeader>
  )
};

export default Header;
