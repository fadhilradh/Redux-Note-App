const Note = ({ note, toggleImportant }) => {
  return (
    <div className="card mb-3 ">
      <div className="card-header">{note.date}</div>
      <div className="card-body">{note.note}</div>
      <button className="btn" onClick={() => toggleImportant(note.id)}>
        Remove from Important
      </button>
    </div>
  );
};

export default Note;
