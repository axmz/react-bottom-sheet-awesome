import React from "react";
import styles from "./styles.module.scss";
import MenuButton from "../menu-button";
import { ReactComponent as MagnifyingGlassIcon } from "../../assets/svg/001-magnifying-glass.svg";
import { ReactComponent as HouseIcon } from "../../assets/svg/002-simple-house-thin.svg";
import { ReactComponent as UserIcon } from "../../assets/svg/003-user.svg";
// import { ReactComponent as MoreIcon } from "../../assets/svg/004-more.svg";
// import { ReactComponent as AddIcon } from "../../assets/svg/005-round-add-button.svg";
// import { ReactComponent as PushPinIcon } from "../../assets/svg/006-push-pin.svg";
// import { ReactComponent as PushPinSolidIcon } from "../../assets/svg/007-push-pin-1.svg";
// import { ReactComponent as Menu1Icon } from "../../assets/svg/008-menu.svg";
// import { ReactComponent as Menu2Icon } from "../../assets/svg/009-menu-1.svg";
// import { ReactComponent as Menu3Icon } from "../../assets/svg/010-menu-button-of-three-horizontal-lines.svg";
// import { ReactComponent as Menu4Icon } from "../../assets/svg/011-menu-button.svg";

const MenuButtonsContainer = () => {
  const menuButtonsArray = [
    <HouseIcon key={1} />,
    <MagnifyingGlassIcon key={2} />,
    <UserIcon key={3} />,
    // <MoreIcon />,
    // <AddIcon />,
    // <PushPinIcon />,
    // <PushPinSolidIcon />,
    // <Menu1Icon />,
    // <Menu2Icon />,
    // <Menu3Icon />,
    // <Menu4Icon />
  ];
  const newProps = { 
    width: 40, 
    height: 40, 
    onClick: (e) => {
      console.log(e.target)
    },
   };

  return (
    <div className={styles.container}>
      {menuButtonsArray.map((btn,i) => {
        const newBtn = React.cloneElement(btn, newProps);
        return <MenuButton key={i} elemtype={'button'}>{newBtn}</MenuButton>;
      })}
    </div>
  );
};

export default MenuButtonsContainer;
