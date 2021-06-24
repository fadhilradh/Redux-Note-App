import Note from "./Note";

const AllNotes = ({ notes, toggleImportant }) => {
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
