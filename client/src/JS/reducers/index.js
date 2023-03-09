import {  combineReducers} from "redux";
import { authreducer } from "./authreducer";
import { productreducers } from "./productReducers";
export const rootReducer = combineReducers({
    auth: authreducer,
    prod: productreducers,
})