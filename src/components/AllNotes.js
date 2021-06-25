import Note from "./Note";
import { connect } from "react-redux"; //needs to params : mapStateToProps, mapDispatchToProps

const AllNotes = ({ notes }) => {
  return (
    <div>
      <h3> Notes</h3>
      <div className="notes">
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  notes: state.notes,
});

export default connect(mapStateToProps)(AllNotes); //if data change, component will re render
