import React from "react";
import "react-drawer/lib/react-drawer.css";

import LanguageDropdown from "../LanguageDropdown/LanguageDropdown";
import NotificationDropdown from "../NotificationDropdown/NotificationDropdown";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import LogoBlock from "./LogoBlock";

const Header = () => {
  return (
    <>
      <header id="page-topbar">
        <div className="navbar-header">
          <LogoBlock />

          <div className="d-flex">
            <LanguageDropdown />

            <NotificationDropdown />

            <ProfileMenu />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
