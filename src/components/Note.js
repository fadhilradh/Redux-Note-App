import { useDispatch } from "react-redux";
import { toggleNote } from "../redux/actions/notes.action";

const Note = ({ note }) => {
  const dispatch = useDispatch();
  return (
    <div className="card mb-3 w-25">
      <div className="card-header">{note.date}</div>
      <div className="card-body">{note.note}</div>
      <button
        disabled={note.isImportant}
        className="btn"
        onClick={() => dispatch(toggleNote(note.id))}
      >
        Add to Important
      </button>
    </div>
  );
};

export default Note;
