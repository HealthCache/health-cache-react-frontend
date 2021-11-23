import axios from "axios";
import { Message } from "./messages";
import {Dispatch} from "redux";
import {ActionTypes} from "./types";

const urlApi = `http://localhost:2727/subject/` ; //to be set with API host/subject

export interface Subject{
    subject_id: number
    username_id: number,
    content: string,
    timestamp: string,
    messages: Message,
    votes: number
}

export interface FetchAllSubjectsAction{
    type: ActionTypes.fetchAllSubjects;
    payload: Subject[];
}

export interface createSubjectAction{
    type: ActionTypes.createSubject;
    payload: Subject[];
}

export const fetchAllSubjects = () => {
    return async (dispatch: Dispatch) => {
        const resp = await axios.get<Subject[]>(urlApi+'getall')
        dispatch<FetchAllSubjectsAction>({
            type: ActionTypes.fetchAllSubjects,
            payload: resp.data
        })
    }
}

export interface ISubject{
    subject_id:number,
    content:string,
    timestamp:string,
    username:number

}

export const createSubject = (subject:ISubject) => {
    return async (dispatch: Dispatch) => {
        const resp = await axios.post<Subject[]>(urlApi+'create',subject)
        dispatch<createSubjectAction>({
            type: ActionTypes.createSubject,
            payload: resp.data
        })
    }
}


