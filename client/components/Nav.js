import Link from "next/link";
import React from "react";
// import NavStyles from "./styles/NavStyles";

const Nav = () => (
  <ul>
    <Link href="/items">
      <a>Shop</a>
    </Link>
    <Link href="/sell">
      <a>Sell</a>
    </Link>
    <Link href="/signup">
      <a>Signup</a>
    </Link>
    <Link href="/orders">
      <a>Orders</a>
    </Link>
    <Link href="/sell">
      <a>Sell</a>
    </Link>
    <Link href="/me">
      <a>Account</a>
    </Link>
  </ul>
);

export default Nav;
