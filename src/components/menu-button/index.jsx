import React from "react";
import styles from "./styles.module.scss";

const MenuButton = ({children}) => {

  return (
    <div className={styles['menu-button']}>
      {children}
    </div>
  );
};

export default MenuButton;
