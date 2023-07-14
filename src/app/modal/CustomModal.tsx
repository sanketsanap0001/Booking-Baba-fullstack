import React from "react";
import "../styles/modal.css";
import { TfiClose } from "react-icons/tfi";
interface Props {
  modalStyle?: React.CSSProperties;
  modalClass?: string;
  showModal?: boolean;
  isFlexible?: boolean;
  showHeader?: boolean;
  headerTitle?: string;
  showBackButton?: boolean;
  showBBPSLogo?: boolean;
  handleBackClick?: any;
  showModalHeader?: boolean;
  modalHeader?: string;
  topRightCloseButtonID?: string;
  children: React.ReactNode;
}

export const CustomModal: React.FC<Props> = ({
  modalStyle,
  modalClass,
  showModal,
  isFlexible,
  showHeader,
  handleBackClick,
  showModalHeader,
  modalHeader,
  topRightCloseButtonID,
  children,
}) => {
  return (
    <div
      id="modal"
      className="modal-background"
      style={showModal ? {} : { display: "none" }}
    >
      <div
        id="modal-children"
        className={`modal-layout ${modalClass ? modalClass : ""} ${
          isFlexible ? "flexible" : ""
        } ${showHeader ? "modal-header" : ""} `}
        style={modalStyle ? modalStyle : {}}
      >
        {showModalHeader && (
          <div className="modal-header">
            <div className="header">{modalHeader}</div>

            <div
              id={topRightCloseButtonID ? topRightCloseButtonID : "x-button"}
              className="x-button"
              onClick={handleBackClick}
            >
              {/* <CloseIcon /> */}
              <TfiClose />
            </div>
          </div>
        )}
        <div className="modal-child-container" id="modal-child-container">
          {children}
        </div>
      </div>
    </div>
  );
};
