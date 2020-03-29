import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles["header"]}>
      <div className={styles["header__logo"]}>
        <img
          src="https://adnas.com/wp-content/uploads/2016/06/supply-chain.png"
          alt="logo social network"
        />
      </div>
      <h3>"Chain of people"</h3>
    </header>
  );
};

export default Header;
