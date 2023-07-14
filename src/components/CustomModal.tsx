import React from "react";

import "../app/styles/modal.css";

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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              {/* <CloseIcon /> */}
              {/* Close */}
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
