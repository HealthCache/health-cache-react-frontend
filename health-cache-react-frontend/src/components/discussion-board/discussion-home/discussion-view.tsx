import React, { useEffect } from 'react';
import './discussion.css';
import { FaCalendarAlt } from "react-icons/fa";
import { FaCommentDots } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaPlusSquare } from "react-icons/fa";
import { fetchById } from '../../../redux/actions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';


export const Discussion:React.FC<any> = ({subject}) => {

    const dispatch = useDispatch();
    let navigate = useNavigate();


    useEffect(() => {
        console.log(subject)
    },[]);

    const LoadDiscussion = () => {
        getByID();
        navigate("/DiscussionView");

    }

    const getByID = async () => {
        await dispatch(
            fetchById(subject.id)
        );
    }

    return(
        <div className = "subject">
        <div className="subject-container">
            <div className="subject-profile">
                <img className="subject-image" src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg" width="50" height="50"/>
                <h3 className="subject-username">User: {subject.username.username}</h3>
            </div>

            <div className="subject-content">
                <p>{subject.content}</p>
            </div>
            <p className = "subject-date">  <FaCalendarAlt size = {18}/>    {new Date(subject.timestamp).toDateString()} {new Date(subject.timestamp).toLocaleTimeString()}</p>
            </div>
        <div className = "subject-comment">
            <button type="button" onClick = {LoadDiscussion}><FaCommentDots  size = {45}/></button>
            <p>{subject.messages.length}</p>
        </div>

        <div className = "subject-likes">
            <button type="button"><FaRegThumbsUp  size = {40}/></button>
            <p>{subject.votes.length}</p>
        </div>
        </div>
    );
}

export const NewThread:React.FC<any> = (subject:any) =>{
    return(
        <div className = "create-thread"><button type = "button"><FaPlusSquare size = {25}/> Create New Thread</button></div>
    );
}

