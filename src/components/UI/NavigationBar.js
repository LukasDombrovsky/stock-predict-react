import React, { useEffect, useState } from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { NavHashLink } from "react-router-hash-link";

import classes from "./NavigationBar.module.scss";

// Navigation bar with color change when scrolled and fixed on top of page
const NavigationBar = (props) => {
  const [pageScrolled, setPageScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      if (pageScrolled !== show) {
        setPageScrolled(show);
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [pageScrolled]);

  const links = props.links.map((link) => (
    <NavHashLink
      key={link}
      className={classes["nav-link"]}
      style={{
        color: pageScrolled
          ? props.colors.scrolled.textColor
          : props.colors.notScrolled.textColor,
      }}
      smooth
      activeStyle={{ color: props.activeTextColor }}
      to={`/#${link}`}
    >
      {link}
    </NavHashLink>
  ));

  return (
    <Navbar
      className={classes.navbar}
      variant={pageScrolled ? "light" : "dark"}
      expand={props.expand}
      fixed="top"
      style={{
        backgroundColor: pageScrolled
          ? props.colors.scrolled.backgroundColor
          : props.colors.notScrolled.backgroundColor,
        borderBottom: pageScrolled
          ? props.colors.scrolled.borderBottom
          : props.colors.notScrolled.borderBottom,
      }}
    >
      <Container fluid={true}>
        <Navbar.Brand
          className={classes["navbar-brand"]}
          href={props.homeLink}
          style={{
            color: pageScrolled
              ? props.colors.scrolled.textColor
              : props.colors.notScrolled.textColor,
          }}
        >
          <img src={props.brand} alt="Twitter insights logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          className={classes["navbar-collapse"]}
          id="basic-navbar-nav"
        >
          <Nav>{links}</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
