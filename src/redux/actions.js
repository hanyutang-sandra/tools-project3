import { START_APP, USEOLD_FORM, UPLOAD_FORM, START_TEST, GET_FEEDBACK, GET_NEXTTEST, END_APP, BACK_HOME } from "./actionTypes";

export const startApp = () => ({
    type: START_APP
});

export const useoldForm = () => ({
    type: USEOLD_FORM
});

export const uploadForm = () => ({
    type: UPLOAD_FORM
});

export const startTest = () => ({
    type: START_TEST
});

export const getFeedback = () => ({
    type: GET_FEEDBACK
});

export const getNextTest = () => ({
    type: GET_NEXTTEST
});

export const endApp = () => ({
    type: END_APP
});

export const backHome = () => ({
    type: BACK_HOME
});


