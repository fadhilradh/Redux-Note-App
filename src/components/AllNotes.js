const AllNotes = ({ notes }) => {
  return (
    <div>
      <h1>{notes.map((note) => note.note)} </h1>
    </div>
  );
};

export default AllNotes;
