import { ADD_NOTE, TOGGLE_NOTE, FETCH_NOTES } from "../types.js";

const initialState = {
  notes: [],
};

const reducer = (prevState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_NOTE:
      return {
        ...prevState,
        notes: [...prevState.notes, payload],
      };

    case TOGGLE_NOTE:
      const newNotes = prevState.notes.slice();
      const toggledNoteIndex = newNotes.findIndex(
        (note) => note.id === payload
      );
      const toggledNote = newNotes[toggledNoteIndex];
      const newNote = {
        ...toggledNote,
        isImportant: !toggledNote.isImportant,
      };
      newNotes[toggledNoteIndex] = newNote;
      return {
        ...prevState,
        notes: newNotes,
      };

    case FETCH_NOTES:
      return {
        ...prevState,
        notes: payload,
      };

    default:
      return prevState;
  }
};

export default reducer;
