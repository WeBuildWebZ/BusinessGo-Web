import { combineReducers } from "redux";

import user from "./user";
import language from "./language";

const Reducers = () =>
  combineReducers({
    user,
    language,
  });

export default Reducers;
