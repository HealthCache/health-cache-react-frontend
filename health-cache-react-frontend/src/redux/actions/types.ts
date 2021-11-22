import {FetchAllUsersAction} from "./users";
import {LoginUserAction, LogoutUserAction} from "./login";
import {FetchAllSubjectsAction} from "./subjects"
import {FetchAllMessagesAction} from "./messages"

export enum ActionTypes{
    fetchaAllUsers,
    login,
    logout,
    register,
    fetchAllSubjects,
    fetchAllMessages,
}

export type Action = FetchAllUsersAction | LoginUserAction | LogoutUserAction | FetchAllSubjectsAction | FetchAllMessagesAction
    ;
