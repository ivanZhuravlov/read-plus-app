import PropTypes from "prop-types";
import React, { useEffect } from "react";

import { withRouter } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import { getStoreLayout } from "../../store/layout/layoutSelectors";

const Layout = props => {
  const { leftSideBarType } = useSelector(getStoreLayout);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div id="layout-wrapper">
        <Header />
        <Sidebar type={leftSideBarType} />

        <div className="main-content">{props.children}</div>

        <Footer />
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.object,
  location: PropTypes.object,
};

export default withRouter(Layout);
