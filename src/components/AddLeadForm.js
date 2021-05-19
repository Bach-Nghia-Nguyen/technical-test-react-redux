import React from "react";
import { Modal, Form, Button } from "react-bootstrap";

const AddLeadForm = ({ showModal, setShowModal, handleSubmit }) => {
  return (
    <Modal
      size="xl"
      show={showModal}
      onHide={() => setShowModal(false)}
      aria-labelledby="add-lead-modal"
      animation
    >
      <Modal.Header closeButton className="modal-header">
        <Modal.Title>
          <h3>Add Lead</h3>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form></Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="success" onClick={handleSubmit}>
          Save
        </Button>
        <Button variant="secondary" onClick={() => setShowModal(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddLeadForm;
