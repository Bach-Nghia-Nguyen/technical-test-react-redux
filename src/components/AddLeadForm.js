import React, { useState } from "react";
import { Modal, Form, Button, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { leadActions } from "../redux/actions/lead.actions";

const AddLeadForm = ({ showModal, setShowModal }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    location_type: "City",
    location_string: "",
  });

  const handleClose = () => setShowModal(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(leadActions.createLead(formData));
    handleClose();
  };

  return (
    <Modal
      // size="xl"
      show={showModal}
      onHide={handleClose}
      aria-labelledby="add-lead-modal"
      animation
    >
      <Modal.Header className="add-modal-header">
        <Modal.Title>Add Lead</Modal.Title>
      </Modal.Header>

      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Row>
            <Col>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                placeholder="First name"
                name="first_name"
                required
                value={formData.first_name}
                onChange={handleChange}
              />
            </Col>

            <Col>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                placeholder="Last name"
                name="last_name"
                required
                value={formData.last_name}
                onChange={handleChange}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                placeholder="Email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </Col>

            <Col>
              <Form.Label>Mobile</Form.Label>
              <Form.Control
                placeholder="Mobile Number"
                name="mobile"
                required
                value={formData.mobile}
                onChange={handleChange}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label>Location Type</Form.Label>
              <Form.Control
                name="location_type"
                as="select"
                required
                value={formData.location_type}
                onChange={handleChange}
              >
                <option value="City" defaultValue>
                  City
                </option>
                <option value="Zip">Zip</option>
                <option value="Country">Country</option>
              </Form.Control>
            </Col>

            <Col>
              <Form.Label>Location String</Form.Label>
              <Form.Control
                name="location_string"
                required
                value={formData.location_string}
                onChange={handleChange}
              />
            </Col>
          </Row>
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="success"
            type="submit"
            disabled={
              !(
                formData.first_name &&
                formData.last_name &&
                formData.email &&
                formData.mobile &&
                formData.location_type &&
                formData.location_string
              )
            }
            className="add-lead-btn"
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

export default AddLeadForm;
