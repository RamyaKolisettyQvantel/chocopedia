import produce from "immer";
import { GET_BRANDS, GET_BRANDS_SUCCESS, GET_BRANDS_FAILUE, GET_BRAND_DETAILS, GET_BRAND_DETAILS_SUCCESS, GET_BRAND_DETAILS_FAILURE } from "../actionTypes/BrandTypes";

export default function brandsReducer(prevState = { isLoading: false, brands: [],brandDetails: [] }, action) {
    return produce(prevState, draft => {
        switch (action.type) {
            case GET_BRANDS:
                draft.isLoading = true;
                break;
            case GET_BRANDS_SUCCESS:
                draft.isLoading = false;
                draft.brands = action.brands;
                break;
            case GET_BRANDS_FAILUE:
                draft.isLoading = false;
                draft.error = action.error;
                break;
            case GET_BRAND_DETAILS:
                draft.isLoading = true;
                break;
            case GET_BRAND_DETAILS_SUCCESS:
                draft.isLoading = false;
                draft.brandDetails = action.brandDetails;
                break;
            case GET_BRAND_DETAILS_FAILURE:
                draft.isLoading = false;
                draft.error = action.error;
                break;
        }
    });
}