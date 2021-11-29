import {Subject,ActionTypes,Action} from "../actions";

export const singleSubjectsReducer = (state: Subject[] = [], action: Action) => {
    switch (action.type) {
        case ActionTypes.fetchById:
            return action.payload;
        default:
            return state;
    }
}