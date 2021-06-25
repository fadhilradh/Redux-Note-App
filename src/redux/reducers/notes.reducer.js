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
      id: 2,
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
      return {};
    default:
      return prevState;
  }
};

export default reducer;
