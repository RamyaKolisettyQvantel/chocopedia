import { combineReducers } from "redux";
import chocolateReducer from "./ChocolateReducer";
import brandsReducer from "./BrandsReducer";
import loginReducer from "./LoginReducer";


const rootReducer = combineReducers({
        chocoReducer: chocolateReducer, 
        brandsReducer : brandsReducer,
        loginReducer: loginReducer
    });

export default rootReducer