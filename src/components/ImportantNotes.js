import ImportantNote from "./ImportantNote";

const ImportantNotes = ({ notes, toggleImportant }) => {
  return (
    <div>
      <h3>Important Notes</h3>
      <div className="notes"></div>
    </div>
  );
};

export default ImportantNotes;
