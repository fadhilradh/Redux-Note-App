import Note from "./Note";
import { store } from "../redux/store";

const AllNotes = ({ toggleImportant }) => {
  const notes = store.getState().notes;
  return (
    <div>
      <h3> Notes</h3>
      <div className="notes">
        {notes.map((note) => (
          <Note key={note.id} note={note} toggleImportant={toggleImportant} />
        ))}
      </div>
    </div>
  );
};

export default AllNotes;
