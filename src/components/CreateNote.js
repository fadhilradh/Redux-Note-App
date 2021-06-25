import { useState } from "react";
import { connect } from "react-redux";
import { addNewNote } from "../redux/actions/notes.action";

const CreateNote = ({ addNewNote }) => {
  const [note, setNote] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      note,
      id: Math.floor(Math.random() * 1000),
      date: new Date().toJSON().slice(0, 10),
      isImportant: false,
    };
    addNewNote(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Write your note here"
            cols="3"
            className="form-control"
          ></textarea>
          <button className="btn" type="submit">
            Add Note
          </button>
        </div>
      </form>
    </div>
  );
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addNewNote: (data) =>
//       dispatch({
//         type: "ADD_NOTE",
//         payload: data,
//       }),
//   };
// };

// action Creator should return object. Use middleware to return function

export default connect(null, { addNewNote })(CreateNote);
