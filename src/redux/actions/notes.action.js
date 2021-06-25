import { db } from "../../firebase.js";
import { ADD_NOTE, TOGGLE_NOTE, FETCH_NOTES, SET_LOADER } from "../types.js";

export const addNewNote = (data) => async (dispatch) => {
  try {
    dispatch({
      type: SET_LOADER,
    });
    await db.collection("notes").doc(data.id.toString()).set(data); //returns promise

    dispatch({
      type: ADD_NOTE,
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const toggleNote = (id) => async (dispatch) => {
  try {
    dispatch({
      type: SET_LOADER,
    });

    const snapshots = db.collection("notes").doc(id.toString());

    const data = (await snapshots.get()).data();

    await snapshots.update({
      isImportant: !data.isImportant,
    });

    dispatch(fetchNotes());
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchNotes = () => async (dispatch) => {
  try {
    dispatch({
      type: SET_LOADER,
    });

    const snapshots = await db.collection("notes").get();

    const allNotes = snapshots.docs.map((doc) => doc.data());

    dispatch({
      type: FETCH_NOTES,
      payload: allNotes,
    });
  } catch (error) {}
};
