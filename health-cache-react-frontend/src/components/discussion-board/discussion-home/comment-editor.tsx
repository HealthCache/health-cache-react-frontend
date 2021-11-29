import React, {useState} from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import './comment-editor.css';
import { Container,Row,Col,Button} from "react-bootstrap";
import { FaPaperPlane } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { createMessage, createSubject } from "../../../redux/actions";


export const CommentEditor : React.FC<any> = (props) => {
    const maxCharacterNumber : number = 100 ;
    const border:number = 2;
    const [convertedText, setConvertedText] = useState("");
    const [charCounter, setCharCounter] = useState(0);

    const dispatch = useDispatch();

    const deleteSpaces = (text:string) => {
        text =text.replaceAll("<p><br></p>",'');
        text =text.replaceAll("<h1><br></h1>",'');
        text =text.replaceAll("<h2><br></h2>",'');
        text =text.replaceAll("<h3><br></h3>",'');
        text =text.replaceAll("<li><br></li>",'');
        return text;
    }

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

    const createCommentAsync = async (event:any) => {
        let date:Date = new Date();
        console.log(props);
        dispatch(
            createMessage({
              
              content:deleteSpaces(convertedText),
              timestamp:date.getFullYear()+'-'+date.getMonth()+'-'+date.getDay()+' '+date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds(),
              subject_id: props.id,
              user_id:12, //This should be the logged in user info
              username:"Commentor"
          
          })
        );
        setConvertedText('');
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
                    <Col  id="send-button" ><Button className="text-primary2" onClick={createCommentAsync}>Send <FaPaperPlane  /></Button></Col>
                    <Col xs={border}></Col>
                </Row>
                </Col>
            <Col xs={border}></Col>
            </Row>
        </Container>
    )
}