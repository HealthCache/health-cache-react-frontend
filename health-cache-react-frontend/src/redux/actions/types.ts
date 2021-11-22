import {FetchAllUsersAction} from "./users";
import {LoginUserAction, LogoutUserAction} from "./login";
import { AddClaimAction, FetchAllClaimsAction, FetchUsersClaimsAction } from "./claims";

export enum ActionTypes{
    fetchaAllUsers,
    login,
    logout,
    register,
    fetchAllClaims,
    addClaim,
    fetchUsersClaims,

}

export type Action = FetchAllUsersAction | LoginUserAction | LogoutUserAction | FetchAllClaimsAction | AddClaimAction | FetchUsersClaimsAction
    ;
