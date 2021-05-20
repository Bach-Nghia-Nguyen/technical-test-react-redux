import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Modal, Form, Button } from "react-bootstrap";
import { leadActions } from "../redux/actions/lead.actions";

const MarkForm = ({ showModal, setShowModal, lead }) => {
  const dispatch = useDispatch();
  const [communication, setCommunication] = useState("");

  const handleClose = () => setShowModal(false);

  const handleChange = (e) => {
    setCommunication(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(leadActions.giveLeadMark(lead.id, communication));
    handleClose();
  };

  useEffect(() => {
    if (lead) {
      setCommunication(lead.communication || "");
    }
  }, [lead]);

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header className="mark-modal-header">
        <Modal.Title>Mark Communication</Modal.Title>
      </Modal.Header>

      <Form onSubmit={handleSubmit} className="update-lead-mark-form">
        <Modal.Body>
          <Form.Label>Communication</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="communication"
            onChange={handleChange}
            value={communication}
          />
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="success"
            type="submit"
            disabled={false}
            className="update-lead-mark-btn"
          >
            Save
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default MarkForm;
