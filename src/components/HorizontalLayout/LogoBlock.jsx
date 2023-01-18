import React from "react";
import { Link } from "react-router-dom";
import logoHor from "../../assets/images/logo/rp-logo-hor_no-text.svg";
import logoHorWhite from "../../assets/images/logo/rp-logo-hor_no-text--white.svg";

const LogoBlock = () => {
  return (
    <div className="d-flex">
      <div className="navbar-brand-box">
        <Link to="/" className="logo logo-dark">
          <span className="logo-sm">
            <img src={logoHor} alt="" height="22" />
          </span>
          <span className="logo-lg">
            <img src={logoHor} alt="" height="25" />
          </span>
        </Link>

        <Link to="/" className="logo logo-light">
          <span className="logo-sm">
            <img src={logoHorWhite} alt="" height="22" />
          </span>
          <span className="logo-lg">
            <img src={logoHorWhite} alt="" height="25" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default LogoBlock;
