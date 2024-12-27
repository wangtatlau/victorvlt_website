import React from 'react';
import Navbar from '../../components/ui/Navbar';
import styles from './NavbarLayout.module.css';

const NavbarLayout = ({ children }) => {
  return (
    <div className={styles.layoutContainer}>
      <Navbar />
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default NavbarLayout;
