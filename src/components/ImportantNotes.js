import { connect } from "react-redux";
import ImportantNote from "./ImportantNote";

const ImportantNotes = ({ notes }) => {
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

const mapStateToProps = (state) => ({
  notes: state.notes,
});

export default connect(mapStateToProps)(ImportantNotes);
