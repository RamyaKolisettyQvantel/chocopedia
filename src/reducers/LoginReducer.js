import produce from "immer";
import { GET_LOGIN, GET_LOGIN_SUCCESS, GET_LOGIN_FAILURE, CHANGE_INPUT, GET_SIGNUP_SUCCESS, GET_SIGNUP_FAILURE, GET_SIGNUP, GET_SEARCH_FAILURE, GET_SEARCH_SUCCESS, GET_SEARCH_TEXT } from "../actionTypes/LoginTypes";

export default function loginReducer(prevState = { searchText: '', searchData:[], isLoading: false, firstName:'', lastName:'',emailAddress: '', signUpPassword : '', email: '', pwd: '', successData: '', signUpSuccess: false,isLoginSuccess: false }, action) {
    return produce(prevState, draft => {
        switch (action.type) {
            case CHANGE_INPUT:
                draft[action.fieldName] = action.fieldValue
                break;
            case GET_LOGIN:
                draft.isLoading = true;
                draft.email = action.email;
                draft.pwd = action.pwd;
                break;
            case GET_LOGIN_SUCCESS:
                draft.isLoading = false;
                draft.successData = action.successData;
                draft.isLoginSuccess = true;
                break;
            case GET_LOGIN_FAILURE:
                debugger;
                draft.isLoading = false;
                draft.error = action.error;
                draft.isLoginSuccess = false;
                break;
            case GET_SIGNUP:
                draft.isLoading = true;
                draft.firstName = action.firstName;
                draft.lastName = action.lastName;
                draft.emailAddress = action.emailAddress;
                draft.signUpPassword = action.signUpPassword;
                break;
            case GET_SIGNUP_SUCCESS:
                draft.isLoading = false;
                draft.signUpSuccess = true;
                break;
            case GET_SIGNUP_FAILURE:
                draft.isLoading = false;
                draft.error = action.error;
                break;
            case GET_SEARCH_TEXT:
                draft.isLoading = true;
                draft.searchText = action.searchText;
                break;
            case GET_SEARCH_SUCCESS:
                draft.isLoading = false;
                draft.searchData = action.searchData;
                break;
            case GET_SEARCH_FAILURE:
                draft.isLoading = false;
                draft.error = action.error;
                break;
        }
    });
}