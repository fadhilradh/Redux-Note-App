import { useState } from "react";
import AllNotes from "./components/AllNotes";
import CreateNote from "./components/CreateNote";

const App = () => {
  const [notes, setNotes] = useState([]);

  const handleCreateNote = (newNote) => {
    setNotes([...notes, newNote]);
    console.log(notes);
  };

  return (
    <div className="container mt-3 p-3">
      <CreateNote createNote={handleCreateNote} />
      <hr />
      <AllNotes notes={notes} />
    </div>
  );
};

export default App;
