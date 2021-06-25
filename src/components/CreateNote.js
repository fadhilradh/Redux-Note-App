import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewNote } from "../redux/actions/notes.action";

const CreateNote = () => {
  const [note, setNote] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      note,
      id: Math.floor(Math.random() * 1000),
      date: new Date().toJSON().slice(0, 10),
      isImportant: false,
    };
    dispatch(addNewNote(data));
    setNote("");
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

export default CreateNote;
