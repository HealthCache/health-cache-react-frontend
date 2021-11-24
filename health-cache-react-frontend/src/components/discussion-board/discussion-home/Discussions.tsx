import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {Subject} from '../../../redux/actions/subjects';

// import {useHistory} from "react-router";

import {
    Nav,
    Row,
    Col,
    Form,
    Button,
    Container,
  } from "react-bootstrap";

import {Discussion, NewThread} from "./discussion-view"
import { SubjectCreation } from "./subject-creation";
import { fetchAllSubjects, fetchAllSubjectsByUser } from "../../../redux/actions";
import {fetchRecentSubjects} from "../../../redux/actions";

export const Discussions: React.FC<any> = () => {
    //const [search, setSearch] = useState("");
    const dispatch = useDispatch();
    //const [url, setUrl] = useState("/recent")
    const appState = useSelector<any, any>((state) => state);

    // const history = useHistory();

    //const toCreate = () => {
      //  history.push("/bookmarks");
      //};

      useEffect(()=>{              
        loadSubjects();
      },[]);

      useEffect(()=>{        
        console.log(appState);      
      },[appState]);

      const loadSubjects = async () => {
        await dispatch(
            fetchAllSubjects()
        );
      }

      const loadRecent = async (event: any) => {
        await dispatch(
          fetchRecentSubjects()
        );
      }



    const loadSubjectsByUser = async (event: any) => {
      await dispatch(
          fetchAllSubjectsByUser(appState.User.user_id)
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
                    {
                        appState.subjects.map((itm:Subject, idx:number) => {
                           return(
                            <Discussion key={idx} subject={itm}/>
                           );
                        })
                    }
                </Row>
            </Container>
          </div>
          </>
      );

};