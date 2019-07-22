import { getBrandsSuccess, getBrandsFailure, getBrandDetailsFailure, getBrandDetailsSuccess } from "../actionCreators/BrandCreators";
import { put } from "redux-saga/effects";


export function* getBrands(){
    try{
        const brandResponse = yield fetch("http://localhost:3000/brands");
        const brands = yield brandResponse.json();
        yield put(getBrandsSuccess(brands));
    } catch(error){
        yield put(getBrandsFailure(error));
    }
}
export function* getBrandChocolates(action){
    try {
        let brandDetailsResponse = yield fetch(`http://localhost:3000/chocolates?brandId=${action.id}`);
        let brandDetails = yield brandDetailsResponse.json();
        yield put(getBrandDetailsSuccess(brandDetails));
    } catch(error){
        yield put(getBrandDetailsFailure(error));
    }
}