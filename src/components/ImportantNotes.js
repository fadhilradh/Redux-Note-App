import { useSelector } from "react-redux";
import ImportantNote from "./ImportantNote";

const ImportantNotes = () => {
  const notes = useSelector((state) => state.notes);
  return (
    <div>
      <h3>Important Notes</h3>
      <div className="notes">
        {notes
          .filter((note) => note.isImportant)
          .map((note) => (
            <ImportantNote key={note.id} note={note} />
          ))}
      </div>
    </div>
  );
};

export default ImportantNotes;
