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
} from "react-bootstrap";
import { ModalBody, ModalFooter, ModalHeader } from "reactstrap";

let curUser = sessionStorage.getItem("loggedUser");

console.log("Current user" + curUser);

const Claims: React.FC<any> = () => {
  let state = useSelector((state: any) => state);

  let [claims, setClaims] = useState([]);
  let [newClaim, setNewClaim] = useState({
    userId: 0,
    claimType: "",
    description: "",
  });

  // We're not gonna use anything after this line

  const [curState, setCurState] = useState(state);

  let fakeState = {
    userLogin: {
      addressLineOne: "",
      addressLineTwo: "",
      city: "",
      dob: "",
      email: "",
      firstName: "Emanuel",
      gender: "",
      lastName: "",
      password: "",
      phoneNo: "",
      profpic: "",
      relationshipStatus: "",
      role: "",
      user_id: 1,
      username: "",
      zipcode: "",
    },
  };
  state = fakeState;
  console.log(state);

  console.log("This is our fake state" + curState);

  //And before this line

  const handleSubmit = async () => {
    console.log("We're submitting form");
    newClaim.userId = 1;

    console.log("This is our new claim ", newClaim);
    let res = await axios.post("http://localhost:8089/claim/save", newClaim);

    console.log("RESPONSE FROM AXIOS", res);
    fetchClaims(newClaim.userId);
    handleClose();
  };

  // const newClaim = async () => {
  //   let res = await axios.post("http://localhost:8089/claim/save");
  // };

  const fetchAllClaims = async () => {
    let res = await axios.get("http://localhost:8089/claim/all");
    setClaims(res.data);
  };

  let userId = 1;

  const fetchClaims = async (userId: number) => {
    let res = await axios.get(`http://localhost:8089/claim/byuserid/${userId}`);
    setClaims(res.data);
  };

  useEffect(() => {
    fetchClaims(userId);
  }, [claims.length]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let claimType = "";
  let claimDescription = "";

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
          <Form>
            <ModalTitle>Create New File Claim</ModalTitle>
            <ModalBody>
              <InputGroup className="mb-3">
                <DropdownButton
                  variant="outline-secondary"
                  title="Claim Type"
                  onSelect={(
                    eventKey: string | null,
                    e: React.SyntheticEvent<unknown>
                  ) => {
                    console.log("how!");
                    console.log(eventKey);
                    if (eventKey != null) {
                      newClaim.claimType = eventKey;
                    }
                  }}
                >
                  <Dropdown.Item eventKey="surgery">SURGERY</Dropdown.Item>
                  <Dropdown.Item eventKey="medication">
                    MEDICATION
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="elective">ELECTIVE</Dropdown.Item>
                  <Dropdown.Item eventKey="emergency">EMERGENCY</Dropdown.Item>
                  <Dropdown.Item eventKey="other">OTHER</Dropdown.Item>
                </DropdownButton>
                {/*<FormControl aria-label="Text input with dropdown button" />
                 */}
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
