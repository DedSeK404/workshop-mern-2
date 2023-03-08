import {  combineReducers} from "redux";
import { authreducer } from "./authreducer";
export const rootReducer = combineReducers({
    auth: authreducer
})