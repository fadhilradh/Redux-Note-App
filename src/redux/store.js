import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import notesReducer from "./reducers/notes.reducer";
import thunk from "redux-thunk";

const middleware = [thunk];

export const store = createStore(
  notesReducer,
  composeWithDevTools(applyMiddleware(...middleware))
); //takes reducer and initial state + optional dev tool ext
