import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { leadActions } from "../redux/actions/lead.actions";

const DeleteLeadModal = ({ showModal, setShowModal, lead }) => {
  const dispatch = useDispatch();
  const handleClose = () => setShowModal(false);
  const handleDeleteLead = async () => {
    dispatch(leadActions.deleteLead(lead.id));
    handleClose();
  };

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header className="delete-modal-header">
        <Modal.Title>Do you wish to delete this lead?</Modal.Title>
      </Modal.Header>

      <Modal.Body className="delete-lead-button-group">
        <Button
          variant="danger"
          type="submit"
          className="delete-lead-btn"
          onClick={handleDeleteLead}
        >
          Delete
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default DeleteLeadModal;
