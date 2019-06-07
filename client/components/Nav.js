import React, { Fragment } from "react";
import Link from "next/link";
import { StyledNav, StyledNavItem } from "./styles/nav";
import useUser from './useUser';

const Nav = () => {
  const { data } = useUser();
  
  return ( 
    <Fragment>
      { data && (
        <StyledNav>
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
        </StyledNav>
      )}
    </Fragment>
  )
};

export default Nav;
