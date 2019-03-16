import React, { Fragment } from "react";
import Link from "next/link";
// import NavStyles from "./styles/NavStyles";
import User from './User';
import Signout from './Signout';

const Nav = () => (
    <User>
      { ({data: { me }}) => (
        <ul>
          <Link href="/items">
            <a>Shop</a>
          </Link>
          { me && (
            <Fragment>
              <Link href="/orders">
                <a>Orders</a>
              </Link>
              <Link href="/sell">
                <a>Sell</a>
              </Link>
              <Link href="/me">
                <a>Account</a>
              </Link>
              <Signout/>
            </Fragment>
          )}
          {!me && (
            <Link href="/signup">
              <a>Sign In</a>
            </Link>
          )}
        </ul>
      ) }
    </User>
);

export default Nav;
