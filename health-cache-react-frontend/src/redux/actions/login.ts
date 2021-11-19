import axios from "axios";
import {Dispatch} from "redux";
import {ActionTypes} from "./types";
import {User} from "./users";

//User Local Backend here till we have AWS RDS setup for team 1 & 2
const urlApi ="" ;

export interface LoginUserAction{
    type: ActionTypes.login;
    payload: User;
}
export interface LogoutUserAction{
    type: ActionTypes.logout;
    payload: User;

}
export interface LoginType{
    username:string;
    password:string;
}

export interface regUser{
    username:string,
    password:string,
    firstName:string,
    lastName:string,
    role:string,
    email:string,
    gender:string,
    dob:string,
    addressLineOne:string,
    addressLineTwo:string ,
    zipcode:string ,
    city:string ,
    phoneNo:string ,
    relationshipStatus:string 
}

export const registerUser = (user:regUser) => {
    return async () => {
        try {
        const resp = await axios.post('http://localhost:8089/api/user/register',user) 
        window.location.assign('/Login')
        }
        catch(e) {
            alert("Username or email already taken")

        }
    }
}

export const loginUser = (user:LoginType) => {
    return async (dispatch: Dispatch) => {
        try {
            const resp = await axios.post('http://localhost:8089/api/user/login',user)
            dispatch<LoginUserAction>({
                type: ActionTypes.login,
                payload: resp.data
            })
            sessionStorage.setItem("loggedUser", resp.data);
            window.location.assign('/Profile')
        }
        catch(e) {
            alert("username or password incorrect")
        }
    }
}
export const logoutUser = () => {
    sessionStorage.clear()
    let user :User = {
        addressLineOne: "",
        addressLineTwo: "",
        city: "",
        dob: "",
        email: "",
        firstName: "",
        gender: "",
        lastName: "",
        password: "",
        phoneNo: "",
        profpic: "",
        relationshipStatus: "",
        role: "",
        user_id: 0,
        username: "",
        zipcode: ""
    }
    return (dispatch: Dispatch) => dispatch<LogoutUserAction>({
        type: ActionTypes.logout,
        payload: user

    })
}