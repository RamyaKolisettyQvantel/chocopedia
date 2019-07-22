import produce from "immer";
import { GET_CHOCOLATES, GET_CHOCOLATES_SUCCESS, GET_CHOCOLATES_FAILURE, GET_CHOCOLATE_DETAILS, GET_CHOCOLATE_DETAILS_FAILURE, GET_CHOCOLATE_DETAILS_SUCCESS } from "../actionTypes/ChocolateTypes";
import { GET_BRANDS, GET_BRANDS_SUCCESS, GET_BRANDS_FAILUE, GET_BRAND_DETAILS, GET_BRAND_DETAILS_SUCCESS, GET_BRAND_DETAILS_FAILURE } from "../actionTypes/BrandTypes";
import { GET_LOGIN, GET_LOGIN_SUCCESS, GET_LOGIN_FAILURE, CHANGE_INPUT, GET_SIGNUP_SUCCESS, GET_SIGNUP_FAILURE, GET_SIGNUP, GET_SEARCH_FAILURE, GET_SEARCH_SUCCESS, GET_SEARCH_TEXT } from "../actionTypes/LoginTypes";

export default function chocolateReducer(prevState = { chocolates: [], searchText: '', searchData:[], isLoading: false, firstName:'', lastName:'',emailAddress: '', signUpPassword : '', email: '', pwd: '', chocoDetails: [], brands: [], successData: '', signUpSuccess: false,isLoginSuccess: false, brandDetails: [] }, action) {
    return produce(prevState, draft => {
        switch (action.type) {
            case GET_CHOCOLATES:
                draft.isLoading = true;
                break;
            case GET_CHOCOLATES_SUCCESS:
                draft.chocolates = action.chocolates;
                draft.isLoading = false;
                break;
            case GET_CHOCOLATES_FAILURE:
                draft.isLoading = false;
                draft.error = action.error;
                break;
            case GET_CHOCOLATE_DETAILS:
                draft.isLoading = true;
                break;
            case GET_CHOCOLATE_DETAILS_SUCCESS:
                draft.chocoDetails = action.chocoDetails;
                draft.isLoading = false;
                break;
            case GET_CHOCOLATE_DETAILS_FAILURE:
                draft.isLoading = false;
                draft.error = action.error;
                break;
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