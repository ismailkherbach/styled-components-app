import { combineReducers } from "redux";
import app from "./app/reducers";
import settings from "./settings/reducers";
const reducers = combineReducers({ app, settings });

export default reducers;
