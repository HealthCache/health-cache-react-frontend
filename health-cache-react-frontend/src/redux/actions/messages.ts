import axios from "axios";
import {Dispatch} from "redux";
import {ActionTypes} from "./types";

const urlApi = `http://localhost:2727/message/` ; //to be set with API host/message


export interface Message{
    message_id: number,
    subject_id: number,
    username_id: number,
    content: string,
    timestamp: string
    
}

export interface FetchAllMessagesAction{
    type: ActionTypes.fetchAllMessages;
    payload: Message[];
}

export const fetchAllMessages = () => {
    return async (dispatch: Dispatch) => {
        const resp = await axios.get<Message[]>(urlApi+'getall')
        dispatch<FetchAllMessagesAction>({
            type: ActionTypes.fetchAllMessages,
            payload: resp.data
        })
    }
}