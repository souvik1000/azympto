import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Modal = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 500;

  .modal-content {
    width: 500px;
    background-color: #fff;
    border-radius: 15px;
  }

  .modal-header,
  .modal-footer {
    padding: 10px;
  }

  .modal-title {
    margin: 0;
  }

  .modal-body {
    padding: 10px;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
  }

  .modal-footer {
    display: flex;
    justify-content: end;
  }

  .button--close {
    color: #fff;
    border: 0px;
    align-items: center;
    padding: 8px 20px;

    background: #00cc96;
    border-radius: 32px;
  }
`;

const Popup = ({ title, description, onClose }) => {
  return ReactDOM.createPortal(
    <Modal onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">{title}</h3>
        </div>
        <div className="modal-body">{description}</div>
        <div className="modal-footer">
          <button className="button--close" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </Modal>,
    document.getElementById("overlay")
  );
};

export default Popup;
