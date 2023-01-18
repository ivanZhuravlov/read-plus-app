import React from "react";
import Lottie from "react-lottie";
import spinner from "../../assets/images/lottie_animated/spinner-bookj.json";

import s from "./Spinner.module.scss";
import PropTypes from "prop-types";

const Spinner = ({ isShow = false, overlay = false, width = 200 }) => {
  const spinnerOption = {
    loop: true,
    autoplay: true,
    animationData: spinner,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      {isShow && overlay && (
        <div className={s.spinner_overlay}>
          <Lottie
            width={`${width}px`}
            height={"auto"}
            options={spinnerOption}
          />
        </div>
      )}

      {isShow && !overlay && (
        <Lottie width={`${width}px`} height={"auto"} options={spinnerOption} />
      )}
    </>
  );
};

Spinner.propTypes = {
  isShow: PropTypes.bool,
  overlay: PropTypes.bool,
  width: PropTypes.number,
};

export default Spinner;
