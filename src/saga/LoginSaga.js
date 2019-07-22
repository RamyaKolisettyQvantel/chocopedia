import { put } from "redux-saga/effects";
import { getLoginSuccess, getSignUpSuccess, getSignUpFailure, getSearchSuccessData, getSearchFailureData } from "../actionCreators/LoginCreator";


export function* getLoginUsers(action){
    try{
        if(action.email != "" && action.pwd != ""){
            let loggedInUsers = yield fetch(`http://localhost:3000/users?email=${action.email}&password=${action.pwd}`);
            let loggedInResponse = yield loggedInUsers.json();
            if(loggedInResponse.length){
                yield put(getLoginSuccess(loggedInResponse));
            } else {
                    throw("Please enter valid details")
            }
        } else {
            throw("Please enter email and password before login..")
        } 
    }catch(error){
        alert(error);
    }
}

export function* postUserDetails(action){
    try{
        let postData = {
            firstName: action.firstName,
            lastName: action.lastName,
            email: action.emailAddress,
            password: action.signUpPassword
        }

        const postResponse = yield fetch(`http://localhost:3000/users`,{
                            method:"POST",
                            body:JSON.stringify(postData),
                            headers: {
                                "Content-Type": "application/json"
                            }
        });
        let postedData = yield postResponse.json();
        yield put(getSignUpSuccess(postedData));
    } catch(error){
        yield put(getSignUpFailure(error));
    }
}

export function* getSearchData(action){
    console.log(action);
    try{
        const chocoResponse = yield fetch("http://localhost:3000/chocolates");
        const chocos = yield chocoResponse.json();
        let matchData = [];
        let searchData = chocos.filter(choco => {
                 Object.keys(choco).some(key => {
                     console.log(choco[key]);
                    if(JSON.stringify(choco[key]).includes( action.searchText)){
                        matchData.push(choco);
                    }
                 }) 
            })
        let obj = {};
        let filterdData = matchData.filter(match => !obj[match.id] && (obj[match.id]=true));
        yield put(getSearchSuccessData(filterdData));
    } catch(error){
        yield put(getSearchFailureData(error));
    }
}