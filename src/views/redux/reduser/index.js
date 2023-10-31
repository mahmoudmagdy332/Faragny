import { combineReducers } from "redux";
import CounterReduser from "./CounterReduser";
import UserReduser from "./UserReduser";


export default combineReducers({
    counter:CounterReduser,
    user:UserReduser
})