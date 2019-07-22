import { getChocolatesSuccess, getChocolatesFailure, getChocolateDetailsSuccess, getChocolateDetailsFailure } from "../actionCreators/ChocolateCreators";
import { put } from "redux-saga/effects";

export function* getChocos(){
    try{
        const chocoResponse = yield fetch("http://localhost:3000/chocolates");
        const chocos = yield chocoResponse.json();
        yield put(getChocolatesSuccess(chocos));
    } catch(error){
        yield put(getChocolatesFailure(error));
    }
}

export function* getChocoDetails(action){
    try {
        let chocoDetails = yield fetch(`http://localhost:3000/chocolates/${action.id}`);
        let chocoRes = yield chocoDetails.json();
        yield put(getChocolateDetailsSuccess(chocoRes));
    } catch(error){
        yield put(getChocolateDetailsFailure(error));
    }
}