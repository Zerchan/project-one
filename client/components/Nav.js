import React, { Fragment } from "react";
import Link from "next/link";
import { StyledNav, StyledNavItem } from "./styles/nav";
import User from './User';
import Signout from './Signout';

const Nav = () => (
    <User>
      { ({data: { me }}) => (
        <StyledNav>
          { me && (
            <Fragment>
              <StyledNavItem>
                <Link href="/reservations">
                  <a>Reservations</a>
                </Link>
              </StyledNavItem>
              <StyledNavItem>
                <Link href="/permissions">
                  <a>Permissions</a>
                </Link>
              </StyledNavItem>
              <StyledNavItem>
                <Link href="/me">
                  <a>My Account</a>
                </Link>
              </StyledNavItem>
              <StyledNavItem>
                <Signout/>
              </StyledNavItem>
            </Fragment>
          )}
          {!me && (
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
          )}
        </StyledNav>
      ) }
    </User>
);

export default Nav;
