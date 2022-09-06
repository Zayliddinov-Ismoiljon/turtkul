import React from "react";
import Modal from "@mui/material/Modal";
import { ModalContent } from "./management.style";
import CloseIcon from "@mui/icons-material/Close";

const ResponsibilityModal = ({ body, open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalContent>
        <CloseIcon onClick={handleClose} color={"primary"} />
        <h2>Majburiyatlari</h2>
        <p>{body}</p>
      </ModalContent>
    </Modal>
  );
};

export default ResponsibilityModal;
