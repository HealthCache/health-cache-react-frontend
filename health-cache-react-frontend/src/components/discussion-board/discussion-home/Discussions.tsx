import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

// import {useHistory} from "react-router";

import {
    Nav,
    Row,
    Col,
    Form,
    Button,
    Container,
  } from "react-bootstrap";

import {NewThread} from "./discussion-view"
import { SubjectCreation } from "./subject-creation";
import { fetchAllSubjects } from "../../../redux/actions";
import {fetchRecentSubjects} from "../../../redux/actions";

export const Discussions: React.FC<any> = () => {
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();
    const [url, setUrl] = useState("/recent")
    const appState = useSelector<any, any>((state) => state);

    // const history = useHistory();

    //const toCreate = () => {
      //  history.push("/bookmarks");
      //};

      useEffect(()=>{
        
        console.log(appState);
      },[appState]);

      const loadSubjects = async (event: any) => {
        await dispatch(
            fetchAllSubjects()
        );
      }

      const loadRecent = async (event: any) => {
        await dispatch(
          fetchRecentSubjects()
        );
      }


      return(
          <>
          <div className="mb-5">
              <Row>
                  <SubjectCreation />
              </Row>
          </div>
          <div>
            <Container>
                <Nav className="justify-content-center" variant="tabs" defaultActiveKey="/yourDiscussions">
                    <Nav.Item>
                        <Nav.Link href="/yourDiscussions">Your Discussions</Nav.Link>
                    </Nav.Item>
                    <Nav.Link href="/recent" onClick={loadRecent}>Recent</Nav.Link>
                </Nav>
                <Row>
                    
                </Row>
            </Container>
          </div>
          </>
      );

};