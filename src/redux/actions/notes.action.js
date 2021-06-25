export const addNewNote = (data) => async (dispatch) => {
  // async stuff
  dispatch({
    type: "ADD_NOTE",
    payload: data,
  });
};

export const toggleNote = (id) => async (dispatch) => {
  dispatch({
    type: "TOGGLE_NOTE",
    payload: id,
  });
};
