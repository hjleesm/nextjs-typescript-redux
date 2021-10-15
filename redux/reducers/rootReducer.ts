import { combineReducers } from "redux";
import main from "./main";

const rootReducer = combineReducers({
  main: main,
});

export type ReducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
