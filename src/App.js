import { useEffect } from "react";
import AllNotes from "./components/AllNotes";
import CreateNote from "./components/CreateNote";
import ImportantNotes from "./components/ImportantNotes";
import { store } from "./redux/store";
import { fetchNotes } from "./redux/actions/notes.action";
import { connect } from "react-redux";

const App = ({ loading }) => {
  useEffect(() => {
    store.dispatch(fetchNotes());
  }, []);

  return (
    <div className="container mt-3 p-3">
      <CreateNote />
      <hr />
      <div className="text-center h-25">
        {loading && <div className="spinner-border my-3" />}
      </div>

      <ImportantNotes />
      <hr />

      <AllNotes />
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.loading,
});

export default connect(mapStateToProps)(App);
