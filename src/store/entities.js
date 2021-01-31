import { combineReducers } from "redux";
import bugsReducer from "./bugs";
import projectsReducer from "./projects";
import usersReducer from "./users";

const reducer = combineReducers({
  bugs: bugsReducer,
  projects: projectsReducer,
  users: usersReducer,
});

export default reducer;
