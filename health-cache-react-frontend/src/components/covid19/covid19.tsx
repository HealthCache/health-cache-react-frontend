import React, {useState, useEffect} from 'react';
import Modal from 'react-bootstrap/Modal';
import { useSelector } from 'react-redux';
import covid from './covid.png';
import './covid19.css';

export const Covid19Form: React.FC<any> = (props: any) => {

    const [show, setShow] = useState(true);
    const [showdiagnosis, setShowdiagnosis] = useState(false);
    const [symptomsYesDisable, setSymptomsyesdisable] = useState(false);
    const [symptomsNoDisable, setSymptomsnodisable] = useState(false);
    const [testYesDisable, setTestyesdisable] = useState(false);
    const [testNoDisable, setTestnodisable] = useState(false);
    const [reasonYesDisable, setReasonyesdisable] = useState(false);
    const [reasonNoDisable, setReasonnodisable] = useState(false);
    const [counter, setCounter] = useState(3);

    const handleClose = () => setShow(false);

    useEffect(() =>{

    },[counter])

    const handleDiagnosisChangePos = (event:any) => {
        switch(event.target.name){
            case "radio_symptoms":
                console.log(event.target.name);
                setSymptomsyesdisable(true);
                setSymptomsnodisable(false);
                if(counter < 3)
                {
                setCounter(prevCounter => prevCounter +1);
                }
                break;

            case "radio_test":
                console.log(event.target.name);
                setTestyesdisable(true);
                setTestnodisable(false);
                if(counter < 3)
                {
                setCounter(prevCounter => prevCounter +1);
                }
                break;

            case "radio_reason":
                console.log(event.target.name);
                setReasonyesdisable(true);
                setReasonnodisable(false);
                if(counter < 3)
                {
                setCounter(prevCounter => prevCounter +1);
                }
                break;
            default:
                console.log("no such event");
        }
       
    }

    const handleDiagnosisChangeNeg = (event:any) => {
        switch(event.target.name){
            case "radio_symptoms":
                console.log(event.target.name);
                setSymptomsnodisable(true);
                setSymptomsyesdisable(false);
                if(counter >= 0)
                {
                setCounter(prevCounter => prevCounter -1);
                }
                    break;
            case "radio_test":
                console.log(event.target.name);
                setTestnodisable(true);
                setTestyesdisable(false);
                if(counter >= 0)
                {
                setCounter(prevCounter => prevCounter -1);
                }
                break;

            case "radio_reason":
                console.log(event.target.name);
                setReasonnodisable(true);
                setReasonyesdisable(false);
                if(counter >= 0)
                {
                setCounter(prevCounter => prevCounter -1);
                }
                break;
            default:
                console.log("no such event");
        }
    }

    const handleDiagnosis = (event:any) => {
        event.preventDefault();
        if(counter > 0){
        setShowdiagnosis(true);
        }else{
            setShow(false);
        }
    }


    if(showdiagnosis == false)
    {
    return(
        <>
        <Modal show ={show} onHide={handleClose} backdrop="static">
            <Modal.Header>
                <Modal.Title>COVID-19 Verification Form</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={covid} />
                <form id="covidForm">
                <p>I have experienced new fever, chills or difficulty breathing in the last week:</p>
                <label>Yes&nbsp;</label><input type="radio" disabled={symptomsYesDisable} name="radio_symptoms" id ="symptomsYes" onClick={handleDiagnosisChangePos} required/>   
                <label>&nbsp;&nbsp;No&nbsp;</label><input type="radio" disabled={symptomsNoDisable} id="symptomsNo" name="radio_symptoms" onClick={handleDiagnosisChangeNeg}/>
                <br />
                <br />
                <p>I am someone, or have been in the presence of someone who received a positive COVID-19 test result in the past 2 weeks:</p>
                <label>Yes&nbsp;</label><input type="radio" disabled={testYesDisable} name="radio_test" onClick={handleDiagnosisChangePos} required/>   
                <label>&nbsp;&nbsp;No&nbsp;</label><input type="radio" disabled={testNoDisable} name="radio_test" onClick={handleDiagnosisChangeNeg}/>
                <br />
                <br />
                <p>I have reason to believe I have contracted COVID-19, regardless of recent testing: </p>
                <label>Yes&nbsp;</label><input type="radio" disabled={reasonYesDisable} name="radio_reason" onClick={handleDiagnosisChangePos} required/>   
                <label>&nbsp;&nbsp;No&nbsp;</label><input type="radio" disabled={reasonNoDisable} name="radio_reason" onClick={handleDiagnosisChangeNeg}/>
                <br />
                <br />
                <input type="submit" onClick={handleDiagnosis} value="save changes" className="primary" />
                </form>
            </Modal.Body>
            <Modal.Footer> 
                
                
            </Modal.Footer>
        </Modal>
        </>
    )
    } else {
        return(
            <>
            <Modal show ={show} onHide={handleClose} backdrop="static">
            <Modal.Header>
                <Modal.Title>COVID-19 Diagnosis</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div>
                <h3>Our COVID-19 claims team would love to assist you... </h3>
                <p>Please start your claim by calling our customer service number at: 1-800-UR2-SICK.</p>
            </div>
            </Modal.Body>
            </Modal>
            </>
        )
    }
}
