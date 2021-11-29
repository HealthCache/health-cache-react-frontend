import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {Subject} from '../../../redux/actions/subjects';


// import {useHistory} from "react-router";

import {
    Nav,
    Row,
    CardGroup,
    Card,
    Col,
    Form,
    Button,
    Container,
  } from "react-bootstrap";

import {Discussion, NewThread} from "./discussion-view"
import { SubjectCreation } from "./subject-creation";
import { fetchAllSubjects, fetchAllSubjectsByUser } from "../../../redux/actions";
import {fetchRecentSubjects} from "../../../redux/actions";
import { fetchById } from '../../../redux/actions';

export const Discussions: React.FC<any> = () => {
    //const [search, setSearch] = useState("");
    const dispatch = useDispatch();
    const [url, setUrl] = useState("/Recent")
    const appState = useSelector<any, any>((state) => state);

    // const history = useHistory();

    //const toCreate = () => {
      //  history.push("/bookmarks");
      //};

      useEffect(()=>{ 
          loadSubjects()
      }, [{url}]);

      /*
      useEffect(() => {
        (async () => {
          let iListings: Listing[] = []; // Intermediate listing array
          for await (let listing of getListingPreviewsByURL(props.url))
            iListings.push(listing);
          setListings(iListings);
        })();
      });
      */

      /*
      useEffect(()=>{        
        console.log(appState);      
      },[appState]);
      */

      const toDiscussion = () => {
        setUrl('/Discussion');
        navigate('/Discussion')
      }

      const toRecent = () => {
        setUrl('/Recent');
        navigate('/Recent')
      }

      const loadSubjects = async () => {
        if (url === '/Discussion'){
          if (appState.users.user_id == 0)
            await dispatch(
              fetchAllSubjects()
            );
          else
            await dispatch(
              fetchAllSubjectsByUser(appState.users.user_id)
            );
        }    
        else if (url === '/Recent')
          await dispatch(
            fetchRecentSubjects()
          );
      }
      
      /*
      const loadRecent = async () => {
        await dispatch(
          fetchRecentSubjects()
        );
      }
      */
    
    /*
    const loadSubjectsByUser = async (user_id:number) => {
      await dispatch(
          fetchAllSubjectsByUser(user_id)
      );
    }
    */

      return(
          <>
          <div className="mb-5">
              <Row>
                  <SubjectCreation />
              </Row>
          </div>
          <div>
            <Container>
                <Nav className="justify-content-center" variant="tabs" defaultActiveKey='/Discussion'>
                    <Nav.Item>
                        <Nav.Link href='/Discussion' onClick={toDiscussion}>Your Discussions</Nav.Link>
                    </Nav.Item>
                    <Nav.Link onClick={toRecent}>Recent</Nav.Link>
                </Nav>
                <Row>
                    {
                        appState.subjects.map((itm:any, idx:number) => {
                           return(
                             <div>
                            <Discussion key={idx} subject={itm}/>
                            <br/>
                            </div>
                           );
                        })
                    }
                </Row>

            </Container>
          </div>
          </>
      );      

};