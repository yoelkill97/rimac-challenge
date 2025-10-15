import React from 'react';
import styles from './Header.module.scss';
import RimacLogo from '/rimac-logo.png'; // Asegúrate de tener un SVG del logo en src/assets

interface HeaderProps {
  phoneNumber: string;
}

const Header: React.FC<HeaderProps> = ({ phoneNumber }) => {
  return (
    <header className={styles.header}>
      <div className={styles.leftContent}>
        <img src={RimacLogo} alt="Rimac Logo" className={styles.logo} />
      </div>
      <div className={styles.rightContent}>
        <span className={styles.callToAction}>Compra por este medio</span>
        <span className={styles.phoneNumber}>
          <span className={styles.phoneIcon}>📞</span> {phoneNumber}
        </span>
      </div>
    </header>
  );
};

export default Header;