import { ADD_NOTE, TOGGLE_NOTE, FETCH_NOTES, SET_LOADER } from "../types.js";

const initialState = {
  notes: [],
  loading: false,
};

const reducer = (prevState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_LOADER:
      return {
        ...prevState,
        loading: true,
      };
    case ADD_NOTE:
      return {
        ...prevState,
        loading: false,
        notes: [...prevState.notes, payload],
      };

    case FETCH_NOTES:
      return {
        ...prevState,
        loading: false,
        notes: payload,
      };

    default:
      return prevState;
  }
};

export default reducer;
