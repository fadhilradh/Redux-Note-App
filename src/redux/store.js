import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import notesReducer from "./reducers/notes.reducer";

export const store = createStore(notesReducer, composeWithDevTools()); //takes reducer and initial state + optional dev tool ext
