import {FetchAllUsersAction} from "./users";
import {LoginUserAction, LogoutUserAction} from "./login";
import { AddClaimAction, FetchAllClaimsAction, FetchUsersClaimsAction } from "./claims";
import {FetchAllSubjectsAction} from "./subjects"
import {FetchAllMessagesAction} from "./messages"
import { createSubjectAction } from "./subjects";
import {fetchRecentSubjects} from "./subjects"
import { FetchAllSubjectsByUserAction } from "./subjects";

export enum ActionTypes{
    fetchaAllUsers,
    login,
    logout,
    register,
    fetchAllClaims,
    addClaim,
    fetchUsersClaims,
    fetchAllSubjects,
    fetchAllMessages,
    createSubject,
    fetchAllSubjectsByUser,
    fetchRecentSubjects
}


export type Action = FetchAllUsersAction | LoginUserAction | LogoutUserAction | FetchAllClaimsAction | AddClaimAction | FetchUsersClaimsAction | FetchAllSubjectsAction | FetchAllMessagesAction | FetchAllSubjectsByUserAction | createSubjectAction | fetchRecentSubjects
    ;
