import React from "react";
import styles from "./menu-button.module.scss";

const MenuButton = ({children}) => {

  return (
    <div className={styles['menu-button']}>
      {children}
    </div>
  );
};

export default MenuButton;
