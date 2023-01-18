import PropTypes from "prop-types";
import React, { useEffect } from "react";
import "react-drawer/lib/react-drawer.css";
import { Link } from "react-router-dom";

import LanguageDropdown from "../LanguageDropdown/LanguageDropdown";
import NotificationDropdown from "../NotificationDropdown/NotificationDropdown";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import logoVerWhite from "../../assets/images/logo/rp-logo-ver_no-text--white.svg";

import { withTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getStoreLayout } from "../../store/layout/layoutSelectors";
import { toggleLeftMenu } from "../../store/layout/layoutSlice";

const Header = () => {
  const dispatch = useDispatch();
  const { isLeftMenuOpen } = useSelector(getStoreLayout);

  useEffect(() => {
    const body = document.body;

    if (window.screen.width <= 998) {
      if (!isLeftMenuOpen) {
        body.classList.add("sidebar-enable");
      } else {
        body.classList.remove("sidebar-enable");
      }
    }

    if (window.screen.width >= 998) {
      if (!isLeftMenuOpen) {
        body.classList.add("sidebar-enable");
        body.classList.add("vertical-collapsed");
      } else {
        body.classList.remove("sidebar-enable");
        body.classList.remove("vertical-collapsed");
      }
    }
  }, [isLeftMenuOpen]);

  return (
    <>
      <header id="page-topbar">
        <div className="navbar-header">
          <div className="d-flex">
            <div className="navbar-brand-box d-lg-none d-md-block small-padding">
              <Link to="/" className="logo logo-dark">
                <span className="logo-sm">
                  <img src={logoVerWhite} alt="" height="28" />
                </span>
              </Link>

              <Link to="/" className="logo logo-light">
                <span className="logo-sm">
                  <img src={logoVerWhite} alt="" height="28" />
                </span>
              </Link>
            </div>

            <button
              type="button"
              onClick={() => dispatch(toggleLeftMenu())}
              className="btn btn-sm px-3 font-size-16 header-item "
              id="vertical-menu-btn"
            >
              <i className="fa fa-fw fa-bars" />
            </button>
          </div>

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

Header.propTypes = {
  t: PropTypes.any,
};

export default withTranslation()(Header);
