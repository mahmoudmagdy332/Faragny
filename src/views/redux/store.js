import { createStore,applyMiddleware } from "redux";
import reduxThunk from "redux-thunk"
import Reduser from "./reduser"
import CounterReduser from "./reduser/CounterReduser";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
export const store=createStore(Reduser,composeEnhancers(applyMiddleware(reduxThunk)));