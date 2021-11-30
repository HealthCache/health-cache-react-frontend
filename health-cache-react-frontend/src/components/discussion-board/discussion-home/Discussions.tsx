import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {Subject} from '../../../redux/actions/subjects';
import { useNavigate } from 'react-router';


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
    let usermock = {user_id:46, username:"Virut"};
    //const [search, setSearch] = useState("");
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const [url, setUrl] = useState("/Discussion")
    const [activeSelection,SetActiveSelection] = useState('recent');
    const appState = useSelector<any, any>((state) => state);

    // const history = useHistory();

    //const toCreate = () => {
      //  history.push("/bookmarks");
      //};

      useEffect(()=>{
        loadSubjects2();
      },[activeSelection]);

      useEffect(()=>{ 
          if(usermock.user_id < 0)
            SetActiveSelection('your');
          else
            SetActiveSelection('recent');
      }, []);

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
        //navigate('/Discussion')
        SetActiveSelection('your');
      }

      const toRecent = () => {
        setUrl('/Recent');
        //navigate('/Recent')
        SetActiveSelection('recent');
      }

      const loadSubjects2 = async () => {
        console.log(activeSelection);
        if(activeSelection==='your')
          await dispatch(
            fetchAllSubjectsByUser(usermock.user_id)            
          );
        else
          await dispatch(
            fetchRecentSubjects()
          );
      }

      const loadSubjects = async () => {
        if (url === '/Discussion'){
          if (appState.userLogin.user_id === 0)
            await dispatch(
              fetchAllSubjects()
            );
          else
            await dispatch(
              fetchAllSubjectsByUser(appState.userLogin.user_id)
            );
        }    
        else if (url === '/Recent')
          await dispatch(
            fetchRecentSubjects()
          );
      }

      function YourDiscussionsOption() {
        
        if(usermock.user_id > 0){
          return (
              <Nav.Item onClick={toDiscussion}>
                <Nav.Link  className={activeSelection==='your'?'active':''}>Your Discussions</Nav.Link>
              </Nav.Item>)

        }
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
                    {YourDiscussionsOption()}
                    <Nav.Item onClick={toRecent}>
                        <Nav.Link className={activeSelection==='recent'?'active':''} >Recent</Nav.Link>
                    </Nav.Item>
                        
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