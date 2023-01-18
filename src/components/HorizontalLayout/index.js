import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";

const Layout = props => {
  const { topbarTheme } = localStorage.getItem("layout");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const openMenu = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  return (
    <>
      <div id="layout-wrapper">
        <Header
          theme={topbarTheme}
          isMenuOpened={isMenuOpened}
          openLeftMenuCallBack={openMenu}
        />

        <Navbar menuOpen={isMenuOpened} />

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
