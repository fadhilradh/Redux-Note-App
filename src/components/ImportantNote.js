import { connect } from "react-redux";
import { toggleNote } from "../redux/actions/notes.action";

const Note = ({ note, toggleNote }) => {
  return (
    <div className="card mb-3 ">
      <div className="card-header">{note.date}</div>
      <div className="card-body">{note.note}</div>
      <button className="btn" onClick={() => toggleNote(note.id)}>
        Remove from Important
      </button>
    </div>
  );
};

export default connect(null, { toggleNote })(Note);
