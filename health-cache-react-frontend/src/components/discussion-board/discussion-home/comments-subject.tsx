import React, {useState, useRef, useEffect} from "react";
import { Container,Row,Col,Form,Modal,Button, ModalFooter } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import { FaCalendarAlt } from "react-icons/fa";


import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';


export const CommentThread : React.FC<any> = () => {



    return(
        <div>
            <Row>
                <div><br></br></div>
            </Row>
        < Row>
        <Row>
        <Col xs = {1}></Col>
        <Col xs={1}>
                <img className="subject-image" src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg" width="80" height="80"/>
        </Col>
        <Col xs={6}>Username</Col>
        <Col xs={4}> <FaCalendarAlt/> 11/18/2021</Col>

        
        </Row>   
        
       

        </Row>





        </div>


    );
}