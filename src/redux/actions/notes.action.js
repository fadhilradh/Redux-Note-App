import { db } from "../../firebase.js";
import { ADD_NOTE, TOGGLE_NOTE, FETCH_NOTES } from "../types.js";

export const addNewNote = (data) => async (dispatch) => {
  try {
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
  dispatch({
    type: TOGGLE_NOTE,
    payload: id,
  });
};

export const fetchNotes = () => async (dispatch) => {
  try {
    const snapshots = await db.collection("notes").get();

    const allNotes = snapshots.docs.map((doc) => doc.data());

    dispatch({
      type: FETCH_NOTES,
      payload: allNotes,
    });
  } catch (error) {}
};
