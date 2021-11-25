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
  let [newClaim, setNewClaim] = useState({
    userId: 0,
    claimType: "",
    description: "",
  });
  let [claimType, setClaimType] = useState("");

  newClaim.userId = 1;


  const handleSubmit = async () => {
    console.log("submitting new claim: ", newClaim);
    try {
      axios.defaults.headers.post['Content-Type'] ='application/json';
      axios.defaults.headers.post['Access-Control-Allow-Origin'] = "*";
      let res = await axios.post("http://184.72.201.95:8081/claim/save", newClaim);

      console.log("RESPONSE FROM AXIOS", res);
      fetchClaims();
      handleClose();
    } catch (e:any) {
      console.log(e);
    }
  };

  //Not in use
  /*
  const fetchAllClaims = async () => {
    let res = await axios.get("http://184.72.201.95:8081/claim/all");
    setClaims(res.data);
  };
  */

  //let userId = 1;

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

  }, [claimType]); 

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    newClaim.claimType="";
    setClaimType("");
  }
  const handleShow = () => setShow(true);


  return (
    <div className="content">
      <div className="header-region">
        <h3 className="page-title"><span>My Claims</span></h3>
        <Button className="rev-btn" variant="outline-dark" onClick={handleShow}>New Claim</Button>
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
        <ModalHeader>
          <Form>
            <ModalTitle>Create New Claim</ModalTitle>
            <ModalBody>
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
                      newClaim.claimType = eventKey;
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
                 <span id="dropdown-text">{claimType}</span>
              </InputGroup>
              <InputGroup>
                <InputGroup.Text>DESCRIPTION</InputGroup.Text>
                <FormControl
                  as="textarea"
                  aria-label="With textarea"
                  onChange={(e) => {
                    console.log(e.target.value);
                    newClaim.description = e.target.value;
                  }}
                />
              </InputGroup>
            </ModalBody>
            <ModalFooter>
              <button className="rev-btn" type="button" onClick={handleSubmit}>
                Submit
              </button>
              <button className="rev-btn" type="button" onClick={handleClose}>
                Cancel
              </button>
            </ModalFooter>
          </Form>
        </ModalHeader>
      </Modal>
    </div>
  );
};
export default Claims;