import React, { useEffect, useState } from "react";

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

export const Discussions: React.FC<any> = () => {
    const [search, setSearch] = useState("");
    const [url, setUrl] = useState("/recent")

    // const history = useHistory();

    //const toCreate = () => {
      //  history.push("/bookmarks");
      //};

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
                    <Nav.Link href="/recentDiscussions">Recent</Nav.Link>
                </Nav>
                <Row>
                    
                </Row>
            </Container>
          </div>
          </>
      );

};