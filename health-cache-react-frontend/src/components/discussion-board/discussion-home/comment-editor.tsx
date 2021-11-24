import React, {useState} from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import './comment-editor.css';
import { Container,Row,Col,Button} from "react-bootstrap";
import { FaPaperPlane } from "react-icons/fa";


export const CommentEditor : React.FC<any> = () => {
    const maxCharacterNumber : number = 100 ;
    const border:number = 2;
    const [convertedText, setConvertedText] = useState("");
    const [charCounter, setCharCounter] = useState(0);

    const countCharacters = (e:any)=>{


        if(e.key === 'Backspace' && charCounter!==0 )
            setCharCounter(charCounter-1);
        else if(e.key !== 'Backspace' && charCounter < maxCharacterNumber)
            setCharCounter(charCounter+1);
        
        if(charCounter >= maxCharacterNumber){
            e.preventDefault();
            //setCharCounter(charCounter-1);
            return;
        }

        console.log(charCounter);
    }

    return(
        <Container>
            <Row>
            <Col xs={1}></Col>
            
                <Col>
                <Row id="editor-container"><ReactQuill
                    id="text-editor"
                    onKeyDown = {countCharacters}
                    placeholder = "Type your discussion here!"
                    theme='snow'
                    value={convertedText}
                    onChange={setConvertedText}
                />
                </Row>
                <Row id= "editor-footer">
                    <Col xs={border}></Col>
                    <Col xs={8}></Col>
                    <Col id="send-button"><Button >Send <FaPaperPlane/></Button></Col>
                    <Col xs={border}></Col>
                </Row>
                </Col>
            <Col xs={border}></Col>
            </Row>
        </Container>
    )
}