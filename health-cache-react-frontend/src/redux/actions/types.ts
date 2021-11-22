import {FetchAllUsersAction} from "./users";
import {LoginUserAction, LogoutUserAction} from "./login";
import { AddClaimAction, FetchAllClaimsAction, FetchUsersClaimsAction } from "./claims";
import {FetchAllSubjectsAction} from "./subjects"
import {FetchAllMessagesAction} from "./messages"

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

}

export type Action = FetchAllUsersAction | LoginUserAction | LogoutUserAction | FetchAllClaimsAction | AddClaimAction | FetchUsersClaimsAction | FetchAllSubjectsAction | FetchAllMessagesAction
    ;
