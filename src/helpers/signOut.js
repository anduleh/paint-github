// helpers
import clearData from "./clearData.js";

//actions
import { toggleLogin } from "../actions";

// firebase
import firebase from "../firebase";

export const signOut = (dispatch) => {
  firebase.auth().signOut();

  dispatch(toggleLogin(false));
  clearData(dispatch);
};
