// src/components/Footer/Footer.tsx
import React from 'react';
import styles from './Footer.module.scss';
import RimacLogoWhite from '/rimac-logo.png';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoWrapper}>
          <img src={RimacLogoWhite} alt="Rimac Logo" className={styles.logo} />
        </div>
        <p className={styles.copyright}>
          © 2023 RIMAC Seguros y Reaseguros.
        </p>
      </div>
    </footer>
  );
};

export default Footer;