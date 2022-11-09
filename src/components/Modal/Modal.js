import "./Modal.scss";
import { useEffect, useMemo } from "react";
import { createPortal } from "react-dom";

const modalRootElement = document.getElementById("modal");

export function Modal(props) {
  const modalContainer = useMemo(() => document.createElement("div"), []);
  useEffect(() => {
    if (props.isVisible) {
      modalRootElement.appendChild(modalContainer);

      return () => {
        modalRootElement.removeChild(modalContainer);
      };
    }
  });
  if (props.isVisible) {
    return createPortal(
      <div className="modal-background" onClick={props.onClose}>
        <div
          className="modal-card"
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          <div className="close" onClick={props.onClose}></div>
          {props.children}
        </div>
      </div>,
      modalContainer
    );
  }
  return null;
}
