import React, {useState, useRef, useEffect} from "react";
import { Container,Row,Col,Form,Modal,Button, ModalFooter } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalHeader from "react-bootstrap/esm/ModalHeader";

import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import './subject-creation.css';


export const SubjectCreation : React.FC<any> = () => {
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let counter = 0; 

  const [convertedText, setConvertedText] = useState("Some default content");

    useEffect(()=>{
        counter++;
        console.log(convertedText);
    },[convertedText]);

    return (
        <div>
            
        <Button variant="primary" onClick={handleShow}>
        Launch demo modal
        </Button>
      <Modal show={show} onHide={handleClose} size="lg" centered>
          <ModalHeader>Create new subject</ModalHeader>
            <Container>
        < Row>
        <Col xs={4}>4 column</Col>
        <Col xs={4}>24 column</Col>
        <Col xs={4}>34 column</Col>
        </Row>
        < Row>2</Row>
        < Row>3</Row>

            {/*Modal header*/}
            <br/>
            <Row>
                <Col xs={6} md={5}>
                <ReactQuill 
                    id="textEditor"
                    theme='snow'
                    value={convertedText}
                    onChange={setConvertedText}
                />
                </Col>
                <Col xs={0} md={5}></Col>
                <Col xs={5} md={2}>
                    <ul>
                        <li>Rule 1</li>
                        <li>Rule 2</li>
                        <li>Rule 3</li>
                    </ul>
                    <br/>
                    <br/>
                    <br/>
                </Col>
            </Row>
            <ModalFooter>
            <Button variant="secondary" onClick={handleClose}>Cancel</Button>
            <Button variant="primary">Publish</Button>
            
            </ModalFooter>
        </Container>

        </Modal>
        </div>
        
        
    )
}