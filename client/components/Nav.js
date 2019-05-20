import React, { Fragment } from "react";
import Link from "next/link";
import { StyledNav, StyledNavItem } from "./styles/nav";
import User from './User';
// import Signout from './Signout';

const Nav = () => (
    <User>
      { ({data: { me }}) => (
        <StyledNav>
          { me && (
            <Fragment>
              <StyledNavItem>
                <Link href="/reservations">
                  <a><i className="icofont-ui-calendar"></i></a>
                </Link>
              </StyledNavItem>
              <StyledNavItem>
                <Link href="/myreservations">
                  <a><i className="icofont-meeting-add"></i></a>
                </Link>
              </StyledNavItem>
              <StyledNavItem>
                <Link href="/news">
                  <a><i className="icofont-newspaper"></i></a>
                </Link>
              </StyledNavItem>
              <StyledNavItem>
              <Link href="/reportes">
                <a><i className="icofont-mega-phone"></i></a>
              </Link>
              </StyledNavItem>
            </Fragment>
          )}
          {/*!me && (
            <Fragment>
              <StyledNavItem>
                <Link href="/signin">
                  <a>Sign In</a>
                </Link>
              </StyledNavItem>
              <StyledNavItem>
                <Link href="/signup">
                  <a>Sign Up</a>
                </Link>
              </StyledNavItem>
            </Fragment>
          )*/}
        </StyledNav>
      ) }
    </User>
);

export default Nav;
