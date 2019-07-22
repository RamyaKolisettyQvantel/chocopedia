import { 
    GET_BRANDS, 
    GET_BRANDS_SUCCESS, 
    GET_BRANDS_FAILUE, 
    GET_BRAND_DETAILS, 
    GET_BRAND_DETAILS_SUCCESS, 
    GET_BRAND_DETAILS_FAILURE } from "../actionTypes/BrandTypes";

export function getBrands(){
    return {type:GET_BRANDS}
}

export function getBrandsSuccess(brands){
    return {type: GET_BRANDS_SUCCESS, brands}
}

export function getBrandsFailure(error){
    return {type: GET_BRANDS_FAILUE, error}
}

export function getBrandDetails(id){
    return {type:GET_BRAND_DETAILS, id}
}

export function getBrandDetailsSuccess(brandDetails){
    return {type: GET_BRAND_DETAILS_SUCCESS, brandDetails}
}

export function getBrandDetailsFailure(error){
    return {type: GET_BRAND_DETAILS_FAILURE, error}
}

