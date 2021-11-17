import axios from "axios";
import {Dispatch} from "redux";
import {ActionTypes} from "./types";

const urlApi = `http://52.14.40.145:8080/api/users/all` ;

export interface User{
    user_id: number,
    username:string,
    password:string,
    profpic:string,
    email:string,
    firstName:string,
    lastName:string,
    role:string,
    gender:string,
    dob:string,
    addressLineOne:string,
    addressLineTwo:string ,
    zipcode:string ,
    city:string ,
    phoneNo:string ,
    relationshipStatus:string ,
    user_threads?: [];
    user_claims?: [];
}
export interface FetchAllUsersAction{
    type: ActionTypes.fetchaAllUsers;
    payload: User[];
}

export const fetchAllUsers = () => {
    return async (dispatch: Dispatch) => {
        const resp = await axios.get<User[]>(urlApi)
        dispatch<FetchAllUsersAction>({
            type: ActionTypes.fetchaAllUsers,
            payload: resp.data
        })
    }
}