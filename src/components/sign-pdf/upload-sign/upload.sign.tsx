import React, { useState } from "react";
import { Button, Form, ListGroup, Modal } from "react-bootstrap";
import FontsData from "../../../data/fonts.data";
import "./upload.sign.scss";

export const UploadSign: React.FC = () => {
  const [show, setShow] = useState(true);
  const [text, setText] = useState<string>("Signature");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [fonts, setFonts] = useState<string[]>(
    FontsData.map((data) => data.name)
  );

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add your signature details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Control
          type="text"
          id="inputSign"
          placeholder="Enter name"
          onChange={(e) => setText(e.target.value)}
        />
        <div className="sign-formats">
          <ListGroup>
            {fonts.map((font) => (
              <ListGroup.Item
                className="text-center d-flex align-items-center"
                
              >
                <Form.Check
                  inline
                  name="group"
                  type="radio"
                />
                <p className="m-0" style={{ fontFamily: `"${font}", sans-serif` }}>{text}</p>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
