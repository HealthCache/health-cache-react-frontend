import { render } from "@testing-library/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./claims.css";
import { IClaim } from "./IClaim";
import {
  Modal,
  ModalTitle,
  Dropdown,
  DropdownButton,
  InputGroup,
  FormControl,
  Form,
  Button
} from "react-bootstrap";
import { ModalBody, ModalFooter, ModalHeader } from "reactstrap";

//test user from state: 
let curUser = sessionStorage.getItem("loggedUser");
console.log("Current user" + curUser);

const Claims: React.FC<any> = () => {
  let state = useSelector((state: any) => state);
  console.log("user_id from state: ", state.userLogin.user_id);

  let [claims, setClaims] = useState([]);
  let [claimType, setClaimType] = useState("");
  let newClaim = {
    userId: 0,
    claimType: "",
    description: ""
  };

  // Set the user id to either that from state or default to 1
  newClaim.userId = state.userLogin.user_id !== 0 ? state.userLogin.user_id: 1;

  const handleSubmit = async () => {
    newClaim.claimType = claimType;
    console.log("submitting new claim: ", newClaim);
    try {
      let res = await axios.post("http://184.72.201.95:8089/claim/save", newClaim);

      console.log("RESPONSE FROM AXIOS", res);
      fetchClaims();
      handleClose();
    } catch (e:any) {
      console.log(e);
    }
  };

  const fetchClaims = async () => {
    let res = await axios.get(`http://184.72.201.95:8081/claim/byuserid/${newClaim.userId}`);
    setClaims(res.data);
    console.log("claim: ", res.data);
  };

  
  useEffect(() => {
    if (claimType === "")
    {
      fetchClaims();
    }

  }, [claimType, newClaim.claimType]); 

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    newClaim.claimType="";
    setClaimType("");
  }
  const handleShow = () => { setShow(true); }

  const toggleDarkMode = () => {
    document.body.className = document.body.className === "body-dk"? "body-lt": "body-dk";
  }

  return (
    <div className="content">
      <div className="header-region">
        <h3 className="page-title"><span>My Claims</span></h3>
        <Button className="dm-btn" variant="dark" onClick={toggleDarkMode}>Dark Mode</Button>
        <Button className="rev-btn" variant="secondary" onClick={handleShow}>New Claim</Button>
      </div>
      
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
          //console.log("claim: ", claim);
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

      <Modal show={show}>
        <ModalHeader className="center-text max-width"><h2 id="mod-title">Create New Claim</h2></ModalHeader>
            <ModalBody className="modal-body">
            <Form className="modal-form">
              <InputGroup className="mb-3">
                <DropdownButton
                  variant="outline-secondary"
                  title="Claim Type"
                  onSelect={(
                    eventKey: string | null,
                    e: React.SyntheticEvent<unknown>
                  ) => {
                    console.log(eventKey);
                    if (eventKey != null) {
                      setClaimType(eventKey);
                    }
                  }}
                >
                  <Dropdown.Item eventKey="SURGERY">SURGERY</Dropdown.Item>
                  <Dropdown.Item eventKey="MEDICATION">
                    MEDICATION
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="ELECTIVE">ELECTIVE</Dropdown.Item>
                  <Dropdown.Item eventKey="EMERGENCY">EMERGENCY</Dropdown.Item>
                  <Dropdown.Item eventKey="OTHER">OTHER</Dropdown.Item>
                </DropdownButton>
                 <h4 id="dropdown-text">{claimType}</h4>
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
            <ModalFooter>
              <button className="rev-btn" type="button" onClick={handleSubmit}>
                Submit
              </button>
              <button className="rev-btn" type="button" onClick={handleClose}>
                Cancel
              </button>
            </ModalFooter>
          
        
      </Modal>
    </div>
  );
};
export default Claims;