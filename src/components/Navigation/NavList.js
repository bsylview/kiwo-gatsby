import React from "react";
import FontIcon from "react-md/lib/FontIcons";
import Link from "gatsby-link";

function GetNavList() {
  const NavList = [
    {
      primaryText: "Home",
      leftIcon: <FontIcon>home</FontIcon>,
      component: Link,
      to: "/"
    },
    {
      divider: true
    }
  ];

  NavList.push({
    primaryText: "About",
    leftIcon: <FontIcon>person</FontIcon>,
    component: Link,
    to: "/about/"
  });
  NavList.push({ divider: true });
  NavList.push({
    primaryText: "Reservation",
    leftIcon: <FontIcon>store</FontIcon>,
    component: Link,
    to: "/reservations/"
  });
  return NavList;
}
export default GetNavList;
