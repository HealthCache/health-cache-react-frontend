import {combineReducers} from "redux";
import {usersReducer} from "./users";
import { User} from "../actions";
import { Claim } from "../actions/claims";
import {loginReducer} from "./login";
import { ClaimsReducer } from "./claims-reducer";


export interface StoreState{
    users: User[];
    userLogin: User;
    claims: Claim[];

}

export const reducers = combineReducers<StoreState>({
    users: usersReducer,
    userLogin: loginReducer,
    claims: ClaimsReducer,
});