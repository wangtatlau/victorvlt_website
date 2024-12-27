import React from "react";
import { HashLink } from "react-router-hash-link";
import styles from "./NavLinks.module.css";

const NavLinks = ({ onLinkClick }) => {
  const links = [
    { to: "/#about", text: "About Me" },
    { to: "/#experience", text: "My Experiences" },
    { to: "/#toolbox", text: "My Toolbox" },
    { to: "/#contact", text: "Contact Me" },
    { to: "/photography", text: "Photography" },
  ];

  return (
    <>
      {links.map((link) => (
        <HashLink
          key={link.to}
          smooth
          to={link.to}
          className={styles.itemContainer}
          onClick={onLinkClick}
        >
          <p className={styles.navLink}>{link.text}</p>
        </HashLink>
      ))}
    </>
  );
};

export default NavLinks;
