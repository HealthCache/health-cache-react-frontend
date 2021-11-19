import React from 'react';
import './discussion.css';
import { FaCalendarAlt } from "react-icons/fa";
import { FaCommentDots } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaPlusSquare } from "react-icons/fa";

export const Discussion:React.FC<any> = (subject:any) => {
    return(
        <div className = "subject">
        <div className="subject-container">
            <div className="subject-profile">
                <img className="subject-image" src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg" width="50" height="50"/>
                <h3 className="subject-username">User: Username</h3>
            </div>

            <div className="subject-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in porta enim. 
Nam maximus justo a faucibus efficitur. Praesent at tristique urna, eu fermentum</p>
            </div>
            <p className = "subject-date">  <FaCalendarAlt size = {18}/>    11/17/21</p>
            </div>
        <div className = "subject-comment">
            <button type="button"><FaCommentDots  size = {45}/></button>
            <p>2</p>
        </div>

        <div className = "subject-likes">
            <button type="button"><FaRegThumbsUp  size = {40}/></button>
            <p>5</p>
        </div>
        </div>
    );
}

export const NewThread:React.FC<any> = (subject:any) =>{
    return(
        <div className = "create-thread"><button type = "button"><FaPlusSquare size = {25}/> Create New Thread</button></div>
    );
}