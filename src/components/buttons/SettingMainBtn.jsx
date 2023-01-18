import React from "react";
import PropTypes from "prop-types";

const SettingMainBtn = ({ toggleFn }) => {
  return (
    <div onClick={toggleFn} className="dropdown d-inline-block">
      <button
        type="button"
        className="btn header-item noti-icon right-bar-toggle "
      >
        <i className="bx bx-cog" />
      </button>
    </div>
  );
};

SettingMainBtn.propTypes = {
  toggleFn: PropTypes.func,
};

export default SettingMainBtn;
