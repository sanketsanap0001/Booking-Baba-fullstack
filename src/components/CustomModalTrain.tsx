import React from "react";

import "../app/styles/modaltrain.css";

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

export const CustomModalTrain: React.FC<Props> = ({
  modalStyle,
  modalClass,
  showModal,
  isFlexible,
  showHeader,
  headerTitle,
  showBackButton,
  showBBPSLogo,
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
              close
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
