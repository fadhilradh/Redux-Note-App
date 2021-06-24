import { useState } from "react";
import AllNotes from "./components/AllNotes";
import CreateNote from "./components/CreateNote";
import ImportantNotes from "./components/ImportantNotes";

const App = () => {
  const [notes, setNotes] = useState([]);

  const handleCreateNote = (newNote) => {
    setNotes([...notes, newNote]);
    console.log(notes);
  };

  const handleToggleImportant = (id) => {
    const newNotes = notes.slice();

    const toggledIndex = newNotes.findIndex((note) => note.id === id);

    const toggledNote = newNotes[toggledIndex];

    const newNote = {
      ...toggledNote,
      isImportant: !toggledNote.isImportant,
    };

    newNotes[toggledIndex] = newNote;

    setNotes(newNotes);

    console.log(notes);
  };

  return (
    <div className="container mt-3 p-3">
      <CreateNote createNote={handleCreateNote} />
      <hr />
      <ImportantNotes notes={notes} toggleImportant={handleToggleImportant} />
      <hr />
      <AllNotes notes={notes} toggleImportant={handleToggleImportant} />
    </div>
  );
};

export default App;
