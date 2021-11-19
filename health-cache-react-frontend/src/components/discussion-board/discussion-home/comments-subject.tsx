
import React, {useState, useRef, useEffect} from "react";
import { Container,Row,Col,Form,Modal,Button, ModalFooter } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import { FaCalendarAlt } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";
import './comments.css';
import './discussion.css';



import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';


export const CommentThread : React.FC<any> = () => {



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
        <Col xs={6}><h2>Username</h2>
        <Row> Quisque pulvinar molestie eros, sed suscipit lorem molestie viverra. Sed rutrum pretium congue. Nunc ipsum orci, consequat consectetur leo auctor, luctus rutrum urna. Pellentesque 
        varius arcu ac ipsum venenatis finibus.</Row>
        </Col>
        <Col xs={4}> <FaCalendarAlt/> 11/18/2021
        
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
                    <Col xs = {2}>5</Col>
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

        </div>
       


    );
}

export const Comment : React.FC<any> = () => {


    return(
        <div className = "comment">
        <div className="subject-container">
            <div className="subject-profile">
                <img className="subject-image" src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg" width="50" height="50"/>
                <h4 className="subject-username">User: Username</h4>
            </div>

            <div className="subject-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in porta enim. 
                    Nam maximus justo a faucibus efficitur. Praesent at tristique urna, eu fermentum</p>
            </div>
            <p className = "subject-date">  <FaCalendarAlt size = {18}/>    11/17/21</p>
            </div>
        </div>



    );

}
