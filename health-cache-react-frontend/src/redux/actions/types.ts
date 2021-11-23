import {FetchAllUsersAction} from "./users";
import {LoginUserAction, LogoutUserAction} from "./login";
import {FetchAllSubjectsAction} from "./subjects"
import {FetchAllMessagesAction} from "./messages"
import { createSubjectAction } from "./subjects";
import {fetchRecentSubjects} from "./subjects"

export enum ActionTypes{
    fetchaAllUsers,
    login,
    logout,
    register,
    fetchAllSubjects,
    fetchAllMessages,
    createSubject,
    fetchRecentSubjects
}

export type Action = FetchAllUsersAction | LoginUserAction | LogoutUserAction | FetchAllSubjectsAction | FetchAllMessagesAction | createSubjectAction | fetchRecentSubjects
;
