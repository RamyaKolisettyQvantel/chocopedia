import { GET_CHOCOLATES, 
         GET_CHOCOLATES_SUCCESS,
         GET_CHOCOLATES_FAILURE, 
         GET_CHOCOLATE_DETAILS, 
         GET_CHOCOLATE_DETAILS_SUCCESS, 
         GET_CHOCOLATE_DETAILS_FAILURE } from "../actionTypes/ChocolateTypes";


export function getChocolates(){
    return {type:GET_CHOCOLATES}
}

export function getChocolatesSuccess(chocolates){
    return {type: GET_CHOCOLATES_SUCCESS, chocolates}
}

export function getChocolatesFailure(error){
    return {type: GET_CHOCOLATES_FAILURE, error}
}

export function getChocolateDetails(id){
    return {type: GET_CHOCOLATE_DETAILS, id}
}

export function getChocolateDetailsSuccess(chocoDetails){
    return {type: GET_CHOCOLATE_DETAILS_SUCCESS, chocoDetails}
}

export function getChocolateDetailsFailure(error){
    return {type: GET_CHOCOLATE_DETAILS_FAILURE, error}
}
