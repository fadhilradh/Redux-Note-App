import { useEffect } from "react";
import AllNotes from "./components/AllNotes";
import CreateNote from "./components/CreateNote";
import ImportantNotes from "./components/ImportantNotes";
import { store } from "./redux/store";
import { fetchNotes } from "./redux/actions/notes.action";

const App = () => {
  useEffect(() => {
    store.dispatch(fetchNotes());
  }, []);

  return (
    <div className="container mt-3 p-3">
      <CreateNote />
      <hr />
      <ImportantNotes />
      <hr />
      <AllNotes />
    </div>
  );
};

export default App;
