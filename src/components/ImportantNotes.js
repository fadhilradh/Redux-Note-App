import ImportantNote from "./ImportantNote";

const ImportantNotes = ({ notes, toggleImportant }) => {
  return (
    <div>
      <h3>Important Notes</h3>
      <div className="notes">
        {notes
          .filter((note) => note.isImportant)
          .map((note) => (
            <ImportantNote
              key={note.id}
              note={note}
              toggleImportant={toggleImportant}
            />
          ))}
      </div>
    </div>
  );
};

export default ImportantNotes;
