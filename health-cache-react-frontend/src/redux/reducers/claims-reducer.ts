import { Action, ActionTypes } from "../actions"
import { Claim } from "../actions/claims"

let claims:Claim[];

export const ClaimsReducer = (state:Claim[] = claims, action:Action) => {
    switch(action.type) {
        case ActionTypes.fetchAllClaims:
            return action.payload;
        default:
            return state;
    }
}