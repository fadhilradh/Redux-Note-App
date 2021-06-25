export const addNewNote = (data) =>
  function async(dispatch) {
    // async stuff
    dispatch({
      type: "ADD_NOTE",
      payload: data,
    });
  };
