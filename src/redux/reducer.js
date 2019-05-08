import {
    START_APP,
    USEOLD_FORM,
    UPLOAD_FORM,
    START_TEST,
    GET_FEEDBACK,
    GET_NEXTTEST,
    END_APP,
    BACK_HOME
} from "./actionTypes";
import { combineReducers } from 'redux';

const initialState = {
   page: 'coverPage'
};

function changePage(state = initialState, action) {
    switch (action.type) {
        case START_APP:
            return Object.assign({}, {
                page: 'olddataPage',
            });
        case UPLOAD_FORM:
            return Object.assign({}, {
                page: 'uploadPage'
            });
        case USEOLD_FORM:
            return Object.assign({}, {
                page: 'olddataPage'
            });
        case START_TEST:
            return Object.assign({}, {
                page: 'testPage'
            });
        case GET_FEEDBACK:
            return Object.assign({}, {
                page: 'feedbackPage'
            });
        case GET_NEXTTEST:
            return Object.assign({}, {
                page: 'testPage'
            });
        case END_APP:
            return Object.assign({}, {
                page: 'endPage'
            });
        case BACK_HOME:
            return Object.assign({}, {
                page: 'coverPage'
            });
        default:
            return state
    }
}

const smartTest = combineReducers({ changePage });

export default smartTest;
