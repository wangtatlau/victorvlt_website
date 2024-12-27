import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import styles from "./Navbar.module.css";
import logo from "../../static/icon.svg";
import { useNavigate } from "react-router-dom";
import NavLinks from "./NavLinks";
import { Menu, X } from "lucide-react";

const HomeNavBar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  return (
    <div className={styles.navBar}>
      <div className={styles.leftContainer}>
        <HashLink smooth to="/#home" className={styles.logoContainer}>
          <img src={logo} alt="Logo" className={styles.logo} />
          <div className={styles.names}>
            <h2 className={styles.name}>Victor</h2>
            <h2 className={styles.name}>VLT</h2>
          </div>
        </HashLink>
      </div>
      <button onClick={toggleMenu} className={styles.menuButton}>
        {isMenuOpen ? <></> : <Menu size={35} />}
      </button>
      <div className={styles.rightContainer}>
        <HashLink smooth to="/#about" className={styles.leftItemContainer}>
          <p className={styles.navLink}>About Me</p>
        </HashLink>
        <HashLink smooth to="/#experience" className={styles.leftItemContainer}>
          <p className={styles.navLink}>My Experiences</p>
        </HashLink>
        <HashLink smooth to="/#toolbox" className={styles.leftItemContainer}>
          <p className={styles.navLink}>My Toolbox</p>
        </HashLink>
        <HashLink smooth to="/#contact" className={styles.leftItemContainer}>
          <p className={styles.navLink}>Contact Me</p>
        </HashLink>
        <div
          onClick={() => navigate("/photography")}
          className={styles.leftItemContainer}
        >
          <p className={styles.navLink}>Photography</p>
        </div>
      </div>
      {isMenuOpen && (
        <div className={styles.mobileOverlay} onClick={closeMenu}>
          <div
            className={styles.mobileMenu}
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={closeMenu} className={styles.closeButton}>
              <X size={35} />
            </button>
            <div className={styles.mobileLinks}>
              <NavLinks onLinkClick={closeMenu} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeNavBar;
