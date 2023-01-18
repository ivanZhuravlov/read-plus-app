import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Collapse } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import classname from "classnames";

//i18n
import { withTranslation } from "react-i18next";

import { useSelector } from "react-redux";
import { getStoreLayout } from "../../store/layout/layoutSelectors";

const Navbar = props => {
  const { isLeftMenuOpen } = useSelector(getStoreLayout);

  const [dashboard, setdashboard] = useState(false);

  useEffect(() => {
    var matchingMenuItem = null;
    var ul = document.getElementById("navigation");
    var items = ul.getElementsByTagName("a");
    for (var i = 0; i < items.length; ++i) {
      if (props.location.pathname === items[i].pathname) {
        matchingMenuItem = items[i];
        break;
      }
    }
    if (matchingMenuItem) {
      activateParentDropdown(matchingMenuItem);
    }
  });

  function activateParentDropdown(item) {
    item.classList.add("active");
    const parent = item.parentElement;
    if (parent) {
      parent.classList.add("active"); // li
      const parent2 = parent.parentElement;
      parent2.classList.add("active"); // li
      const parent3 = parent2.parentElement;
      if (parent3) {
        parent3.classList.add("active"); // li
        const parent4 = parent3.parentElement;
        if (parent4) {
          parent4.classList.add("active"); // li
          const parent5 = parent4.parentElement;
          if (parent5) {
            parent5.classList.add("active"); // li
            const parent6 = parent5.parentElement;
            if (parent6) {
              parent6.classList.add("active"); // li
            }
          }
        }
      }
    }
    return false;
  }

  return (
    <>
      <div className="topnav">
        <div className="container-fluid">
          <nav
            className="navbar navbar-light navbar-expand-lg topnav-menu"
            id="navigation"
          >
            <Collapse
              isOpen={isLeftMenuOpen}
              className="navbar-collapse"
              id="topnav-menu-content"
            >
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <Link
                    to="/owner-dashboard"
                    className="nav-link dropdown-toggle arrow-none d-flex align-items-center"
                  >
                    <i className="bx bxs-dashboard me-2" />
                    <span>{props.t("Dashboard")}</span>
                    <div className="arrow-down" />
                  </Link>

                  <div
                    className={classname("dropdown-menu", { show: dashboard })}
                  >
                    <Link to="/dashboard" className="dropdown-item">
                      {props.t("Default")}
                    </Link>
                    <Link to="/dashboard-saas" className="dropdown-item">
                      {props.t("Saas")}
                    </Link>
                    <Link to="/dashboard-crypto" className="dropdown-item">
                      {props.t("Crypto")}
                    </Link>
                    <Link to="/blog" className="dropdown-item">
                      {props.t("Blog")}
                    </Link>
                  </div>
                </li>
              </ul>
            </Collapse>
          </nav>
        </div>
      </div>
    </>
  );
};

Navbar.propTypes = {
  location: PropTypes.any,
  menuOpen: PropTypes.any,
  t: PropTypes.any,
};

export default withRouter(withTranslation()(Navbar));
