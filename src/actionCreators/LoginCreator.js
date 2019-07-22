import {GET_LOGIN, 
        GET_LOGIN_SUCCESS, 
        GET_LOGIN_FAILURE, 
        CHANGE_INPUT, 
        GET_SIGNUP, 
        GET_SIGNUP_SUCCESS,
        GET_SIGNUP_FAILURE, 
        GET_SEARCH_TEXT, 
        GET_SEARCH_SUCCESS, 
        GET_SEARCH_FAILURE } from "../actionTypes/LoginTypes";

export function getLogin(email, pwd){
    return {type:GET_LOGIN,email,pwd}
}

export function getLoginSuccess(successData){
    return {type:GET_LOGIN_SUCCESS, successData}
}

export function getLoginFailure(error){
    debugger;
    return{type:GET_LOGIN_FAILURE, error}
}

export function changeInput(fieldName, fieldValue){
    return {type: CHANGE_INPUT, fieldName, fieldValue}
}

export function postSignUp(firstName, lastName, emailAddress, signUpPassword){
    return{
        type:GET_SIGNUP,
        firstName,
        lastName,
        emailAddress,
        signUpPassword
    }
}

export function getSignUpSuccess(successData){
    return {type:GET_SIGNUP_SUCCESS, successData}
}

export function getSignUpFailure(error){
    return {type:GET_SIGNUP_FAILURE, error}
}


export function getSearchText(searchText){
    return {type:GET_SEARCH_TEXT, searchText}
}

export function getSearchSuccessData(searchData){
    return {type:GET_SEARCH_SUCCESS, searchData}
}

export function getSearchFailureData(error){
    return{type:GET_SEARCH_FAILURE, error}
}