import PropTypes from "prop-types";
import React from "react";
import { Link, withRouter } from "react-router-dom";

import { withTranslation } from "react-i18next";
import SidebarContent from "./SidebarContent";

import logoHorWhite from "../../assets/images/logo/rp-logo-hor_no-text--white.svg";
import logoVerWhite from "../../assets/images/logo/rp-logo-ver_no-text--white.svg";

const Sidebar = ({ type }) => {
  return (
    <>
      <div className="vertical-menu">
        <div className="navbar-brand-box small-padding">
          <Link to="/" className="logo logo-dark">
            <span className="logo-sm">
              <img src={logoHorWhite} alt="read plus logo" height="22" />
            </span>
            <span className="logo-lg">
              <img src={logoVerWhite} alt="read plus logo" height="17" />
            </span>
          </Link>

          <Link to="/" className="logo logo-light">
            <span className="logo-sm">
              <img src={logoVerWhite} alt="read plus logo" height="28" />
            </span>
            <span className="logo-lg">
              <img src={logoHorWhite} alt="read plus logo" height="22" />
            </span>
          </Link>
        </div>

        <div data-simplebar className="h-100">
          {type !== "condensed" ? <SidebarContent /> : <SidebarContent />}
        </div>
      </div>
    </>
  );
};

Sidebar.propTypes = {
  type: PropTypes.string,
};

export default withRouter(withTranslation()(Sidebar));
