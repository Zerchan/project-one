import React, { Fragment } from "react";
import Link from "next/link";
import { StyledNav } from "./styles/nav";
import User from './User';
import Signout from './Signout';

const Nav = () => (
    <User>
      { ({data: { me }}) => (
        <StyledNav>
          { me && (
            <Fragment>
              <li>
                <Link href="/reservations">
                  <a>Create Reservation</a>
                </Link>
              </li>
              <li>
                <Link href="/permissions">
                  <a>Permissions</a>
                </Link>
              </li>
              <li>
                <Link href="/me">
                  <a>My Account</a>
                </Link>
              </li>
              <Signout/>
            </Fragment>
          )}
          {!me && (
            <Fragment>
              <Link href="/signup">
                <a>Sign In</a>
              </Link>
              <Link href="/signup">
                <a>Sign Up</a>
              </Link>
            </Fragment>
          )}
        </StyledNav>
      ) }
    </User>
);

export default Nav;
