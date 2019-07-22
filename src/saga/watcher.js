import { GET_CHOCOLATES, GET_CHOCOLATE_DETAILS } from "../actionTypes/ChocolateTypes";
import { getChocos, getChocoDetails } from "./ChocolateSagaGenerator";
import { all,takeLatest } from "redux-saga/effects";
import { GET_BRANDS, GET_BRAND_DETAILS } from "../actionTypes/BrandTypes";
import { GET_LOGIN, GET_SIGNUP, GET_SEARCH_TEXT } from "../actionTypes/LoginTypes";
import { getBrands, getBrandChocolates } from "./BrandsSaga";
import { getLoginUsers, postUserDetails, getSearchData } from "./LoginSaga";


export default function* watcher(){
    yield all([
        takeLatest(GET_CHOCOLATES, getChocos),
        takeLatest(GET_CHOCOLATE_DETAILS, getChocoDetails), 
        takeLatest(GET_BRANDS, getBrands),
        takeLatest(GET_BRAND_DETAILS, getBrandChocolates),
        takeLatest(GET_LOGIN, getLoginUsers),
        takeLatest(GET_SIGNUP, postUserDetails),
        takeLatest(GET_SEARCH_TEXT, getSearchData)
    ])
}