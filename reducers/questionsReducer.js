import * as Types from './../constants/actionType';
var initialState = [];
const questionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_SUCCEEDED:
            state = action.receivedQuestions;
            return [...state]

        case Types.ADD_QUESTION:
            state = action.newQuestion;
            return [...state]

        case Types.ADD_QUESTION_SUCCEEDED:
            return true;

        default: return [...state]
    }
}

export default questionsReducer;