import {Subject,ActionTypes,Action} from "../actions";

export const subjectsReducer = (state: Subject[] = [], action: Action) => {
    switch (action.type) {
        case ActionTypes.fetchAllSubjects:
            return action.payload;
        default:
            return state;
    }
}