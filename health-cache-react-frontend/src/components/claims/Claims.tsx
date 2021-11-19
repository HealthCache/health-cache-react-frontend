import { render } from "@testing-library/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./claims.css";
import { IClaim } from "./IClaim";
import {
  Modal,
  ModalTitle,
  Dropdown,
  DropdownButton,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const Claims: React.FC<any> = () => {
  let [claims, setClaims] = useState([]);

  const fetchClaims = async () => {
    let res = await axios.get("http://localhost:8089/claim/all");
    setClaims(res.data);
  };

  useEffect(() => {
    fetchClaims();
  }, [claims.length]);

  const [show, setShow] = useState(false);
  //const [dropval, setDropval] = useState("");
  // const handleDrop = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log("Changed the value");
  //   setDropval(event.target.value);
  // };

  // const handleDrop = (event: React.ChangeEvent<any>) => {
  //   console.log("Value changed");
  // };

  // const handleDropSelect = (e: React.SyntheticEvent<unknown>
  //   ) => {
  //   console.log("event key", );
  // };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(show);

  return (
    <div className="content">
      <div className="header-region">
        <h2>My File Claims</h2>
        <button className="rev-btn" type="button" onClick={handleShow}>
          File New Claim
        </button>
      </div>
      <hr />
      <table>
        <tr>
          <th>Claim ID</th>
          <th>Claim Type</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
        {claims.map((claim: IClaim) => {
          console.log("id: " + claim.id);
          console.log("claimType: " + claim.claimType);
          console.log("description: " + claim.description);
          console.log("status: " + claim.status);
          return (
            <tr>
              <td>{claim.id}</td>
              <td>{claim.claimType}</td>
              <td>{claim.description}</td>
              <td>{claim.status}</td>
            </tr>
          );
        })}
        {/*<tr>
          <td>1</td>
          <td>Surgery</td>
          <td>I need to take my face off!</td>
          <td>APPROVED</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Medication</td>
          <td>I need cancer meds</td>
          <td>PENDING</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Other</td>
          <td>Deny this one, dummy.</td>
          <td>DENIED</td>
        </tr>*/}
      </table>

      <Modal show={show}>
        <ModalHeader>
          <ModalTitle>Create New File Claim</ModalTitle>
          <ModalBody>
            <InputGroup className="mb-3">
              <DropdownButton
                variant="outline-secondary"
                title="Claim Type"
                onSelect={(
                  eventKey: string | null,
                  e: React.SyntheticEvent<unknown>
                ) => console.log("Event Key ", eventKey)}
              >
                <Dropdown.Item eventKey="surgery">SURGERY</Dropdown.Item>
                <Dropdown.Item eventKey="medication">MEDICATION</Dropdown.Item>
                <Dropdown.Item eventKey="elective">ELECTIVE</Dropdown.Item>
                <Dropdown.Item eventKey="emergency">EMERGENCY</Dropdown.Item>
                <Dropdown.Item eventKey="other">OTHER</Dropdown.Item>
              </DropdownButton>
              {/*<FormControl aria-label="Text input with dropdown button" />
               */}
            </InputGroup>
            <InputGroup>
              <InputGroup.Text>DESCRIPTION</InputGroup.Text>
              <FormControl as="textarea" aria-label="With textarea" />
            </InputGroup>
          </ModalBody>
          <ModalFooter>
            <input className="rev-btn" type="submit" value="Submit" />
            <button className="rev-btn" type="button" onClick={handleClose}>
              Cancel
            </button>
          </ModalFooter>
        </ModalHeader>
      </Modal>
    </div>
  );
};
export default Claims;
