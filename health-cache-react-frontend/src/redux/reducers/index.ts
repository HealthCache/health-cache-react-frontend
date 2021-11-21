import {combineReducers} from "redux";
import {usersReducer} from "./users";
import { User} from "../actions";
import {loginReducer} from "./login";
import { Subject,Message } from "../actions";
import { subjectsReducer } from "./subjects";
import { messagesReducer } from "./message";


export interface StoreState{
    users: User[];
    userLogin: User;
    messages: Message[];
    subjects: Subject[]; 
}

export const reducers = combineReducers<StoreState>({
    users: usersReducer,
    userLogin: loginReducer,
    messages: messagesReducer,
    subjects:subjectsReducer
});