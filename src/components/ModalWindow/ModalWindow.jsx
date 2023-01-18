import React from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import PropTypes from "prop-types";
import Lottie from "react-lottie";
import { getAnimation } from "../../helpers/lottieAnimationsHelper";

const ModalWindow = ({
  animationType = "",
  isOpen,
  onClose,
  onToggle,
  title,
  body,
  footer = false,
  scrollable = false,
  centered = true,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      toggle={onToggle}
      scrollable={scrollable}
      centered={centered}
      returnFocusAfterClose={false}
      keyboard={true}
    >
      <ModalHeader className="modal-header">
        <span className="modal-title font-size-18 mt-0">{title}</span>
        <button
          type="button"
          onClick={onClose}
          className="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </ModalHeader>

      <ModalBody className="modal-body pb-5">
        {animationType && (
          <div className="mb-3">
            <Lottie
              width={"80px"}
              height={"auto"}
              options={getAnimation(animationType)}
            />
          </div>
        )}

        <div className="text-center font-size-16">{body}</div>
      </ModalBody>

      {footer && <ModalFooter>{footer}</ModalFooter>}
    </Modal>
  );
};

ModalWindow.propTypes = {
  animationType: PropTypes.string,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onToggle: PropTypes.func,
  title: PropTypes.any,
  body: PropTypes.any,
  footer: PropTypes.any,
  scrollable: PropTypes.bool,
  centered: PropTypes.bool,
};

export default ModalWindow;
