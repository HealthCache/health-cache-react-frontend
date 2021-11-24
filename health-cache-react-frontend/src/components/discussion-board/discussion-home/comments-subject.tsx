
import React, {useState, useRef, useEffect} from "react";
import { Container,Row,Col,Form,Modal,Button, ModalFooter } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import { FaCalendarAlt } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";
import './comments.css';
import './discussion.css';
import { useDispatch, useSelector } from 'react-redux';
import { FetchAllMessagesAction, fetchAllMessages } from "../../../redux/actions";


import { CommentEditor } from "./comment-editor";
import {Message} from '../../../redux/actions/messages';



import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';


export const CommentThread : React.FC<any> = () => {
    const dispatch = useDispatch();
    const appState = useSelector<any, any>((state) => state);


    useEffect(()=>{              
        fetchMessages();
      },[]);

      useEffect(()=>{        
        console.log(appState);      
      },[appState]);

      const fetchMessages = async () => {
        await dispatch(
            fetchAllMessages()
        );
      }

      

    return(
       
        <>
        <div>
        <Row>
        <MainSubject/>
        </Row>

        <Row>
                    {
                        appState.subjects.messages.map((itm:Message, idx:number) => {
                           return(
                            <Comment key={idx} subject={itm}/>
                           );
                        })
                    }
                </Row>

        </div>
        </>


    );
}

export const Comment : React.FC<any> = ({message}) => {

    useEffect(()=> {
        console.log(message)
    },[]);

    return(
        <div className = "comment">
        <div className="subject-container">
            <div className="subject-profile">
                <img className="subject-image" src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg" width="50" height="50"/>
                <h4 className="subject-username">User: {message.username.username}</h4>
            </div>

            <div className="subject-content">
                <p>{message.content}</p>
            </div>
            <p className = "subject-date">  <FaCalendarAlt size = {18}/>    {new Date(message.timestamp).toDateString()} </p>
            </div>
        </div>
    );

}


export const MainSubject : React.FC<any> = () => {
    
const appState = useSelector<any, any>((state) => state);

    return(
        <div>
        <Row>
            <div><br></br></div>
        </Row>
    <Row>
    <Col xs = {1}></Col>
    <Col xs={1}>
            <img className="subject-image" src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg" width="80" height="80"/>
    </Col>
    <Col xs={6}><h2>appState.subject.username.username</h2>
    <Row>appState.subject.content</Row>
    </Col>
    <Col xs={4}> <FaCalendarAlt/> appState.subject.timestamp
    
    <Row>
        <Col xs = {3}>
            
        </Col>
        <Col xs = {1}>
        <Row>
            <div><br></br></div>
        </Row>
           <button type = "button" className = "like"> <FaRegThumbsUp size = {20}/></button>
            <Row>
                <Col xs = {2}></Col>
                <Col xs = {2}>appState.subject.votes.length</Col>
            </Row>
        </Col>
    </Row>
    </Col>
    </Row>   
    <Row>
        <div><br></br></div>
    </Row>
   <Row>
        <div><br></br></div>
    </Row>



    <Row>
    <Col xs = {2}></Col>
    <Col xs = {10}><Comment/></Col>
    </Row>
    <Row>
        <div><br></br></div>
    </Row>
   <Row>
        <div><br></br></div>
    </Row>
    <Row><CommentEditor/></Row>
    </div>
    );
}