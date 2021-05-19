import { combineReducers } from "redux";
import leadReducers from "./lead.reducers";

export default combineReducers({
  lead: leadReducers,
});
