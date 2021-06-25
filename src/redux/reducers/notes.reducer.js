const initialState = {
  notes: [
    {
      id: 1,
      date: "23/12/20",
      isImportant: false,
      note: "I am note 1",
    },
    {
      id: 2,
      date: "23/12/20",
      isImportant: false,
      note: "I am note 2",
    },
    {
      id: 3,
      date: "23/12/20",
      isImportant: false,
      note: "I am note 2",
    },
  ],
};

const reducer = (prevState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_NOTE":
      return {
        ...prevState,
        notes: [...prevState.notes, payload],
      };
    case "TOGGLE_NOTE":
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
    default:
      return prevState;
  }
};

export default reducer;
