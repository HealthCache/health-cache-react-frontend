import axios from "axios";
import React, { useEffect, useState } from "react";
import "./claims.css";
import { Covid19Form } from "../covid19/covid19";
import { IClaim } from "./IClaim";
import {
  Modal,
  Dropdown,
  DropdownButton,
  InputGroup,
  FormControl,
  Form,
  Button
} from "react-bootstrap";
import { ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const Claims: React.FC<any> = () => {

  console.log("user-id: " + sessionStorage.getItem("USER_ID"));
  let sessionId = sessionStorage.getItem("USER_ID");

  const [show, setShow] = useState(false);
  let [claims, setClaims] = useState([]);
  let [claimType, setClaimType] = useState("");
  let newClaim = {
    userId: sessionId,
    claimType: "",
    description: ""
  };

  const handleSubmit = async () => {
    newClaim.claimType = claimType;
    console.log("submitting new claim: ", newClaim);
    try {
      let res = await axios.post("/claim/save", newClaim);
      console.log("RESPONSE FROM AXIOS", res);
      fetchClaims();
      handleClose();
    } catch (e:any) {
      console.log(e);
    }
  };

  const fetchClaims = async () => {
    let res = await axios.get(`/claim/byuserid/${newClaim.userId}`);
    setClaims(res.data);
    console.log("claim: ", res.data);
  };

  useEffect(() => {

    if (sessionId === "0") {
      // @ts-ignore
      navigate("/login");
  }

    if (claimType === "")
    {
      fetchClaims();
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [claimType, newClaim.claimType]); 


  const handleClose = () => {
    setShow(false);
    newClaim.claimType="";
    setClaimType("");
  }
  const handleShow = () => { setShow(true); }


  return (
    <div className="content">
      <Covid19Form />
      <div className="header-region">
        <h3 className="page-title"><span>File a Claim</span></h3>
        <Button className="rev-btn btn-primary text-primary2" size="sm" variant="secondary" onClick={handleShow}>New Claim</Button>
      </div>
      
      <hr />

      <div id="table-container" className="container shadow p-3 mb-5 bg-secondary3 rounded">
      <h1 className="fw-light text-primary2">My Claims</h1>
      <hr />

      <table>
        <tbody>
        <tr>
          <th>Claim ID</th>
          <th>Claim Type</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
        {claims.map((claim: IClaim) => {
          return (
            <tr key={claim.id}>
              <td>{claim.id}</td>
              <td>{claim.claimType}</td>
              <td>{claim.description}</td>
              <td>{claim.status}</td>
            </tr>
          );
        })}
        </tbody>
      </table>

      <hr />


      </div>

      <Modal show={show}>
        <ModalHeader id="claim-container" className="center-text container-lg max-width">
          <span id="mod-title">Create New Claim</span></ModalHeader>
            <ModalBody className="modal-body container-lg">
            <Form className="modal-form container-lg">
              <InputGroup className="mb-3">
                <DropdownButton
                  title="Claim Type"
                  onSelect={(
                    eventKey: string | null,
                    e: React.SyntheticEvent<unknown>
                  ) => {
                    console.log(eventKey);
                    if (eventKey != null) {
                      setClaimType(eventKey);
                    }
                  }} >
                  <Dropdown.Item eventKey="SURGERY">SURGERY</Dropdown.Item>
                  <Dropdown.Item eventKey="MEDICATION">
                    MEDICATION
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="ELECTIVE">ELECTIVE</Dropdown.Item>
                  <Dropdown.Item eventKey="EMERGENCY">EMERGENCY</Dropdown.Item>
                  <Dropdown.Item eventKey="OTHER">OTHER</Dropdown.Item>
                </DropdownButton>
                 <h4 className="text-black" id="dropdown-text">{claimType}</h4>
              </InputGroup>
              <InputGroup>
                <InputGroup.Text>Description</InputGroup.Text>
                <FormControl
                  as="textarea"
                  aria-label="With textarea"
                  onChange={(e) => {
                    console.log(e.target.value);
                    newClaim.description = e.target.value;
                  }}
                />
              </InputGroup>
              </Form>
            </ModalBody>
            <ModalFooter className="container-lg">
              <button className="rev-btn border-primary rounded" type="button" onClick={handleSubmit}>
                Submit
              </button>
              <button className="bg-primary3 rev-btn border-primary3 rounded" type="button" onClick={handleClose}>
                Cancel
              </button>
            </ModalFooter>
      </Modal>

    </div>
  );
};
export default Claims;