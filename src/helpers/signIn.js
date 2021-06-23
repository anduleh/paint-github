// firebase
import firebase, { db } from "../firebase.js";

// actions
import { updateSnackbarMessage, toggleSnackBar } from "../actions";

// helpers
import clearData from "./clearData.js";

export const signIn = async (dispatch) => {
  // clear data in case a callback hit after sign out
  clearData(dispatch);

  var provider = new firebase.auth.GithubAuthProvider();
  // repo - Grants full access to repositories, including private repositories.
  provider.addScope("repo");
  // read:user - Grants access to read a user's profile data.
  provider.addScope("read:user");
  provider.setCustomParameters({
    allow_signup: "false",
  });

  try {
    let result = await firebase.auth().signInWithPopup(provider);

    let accessToken = result.credential.accessToken;
    try {
      await db
        .collection("users")
        .doc(result.user.uid)
        .set({ access_token: accessToken }, { merge: true });
    } catch (err) {
      console.error(
        "Error updating user data upon login. May cause paint errors later. Please sign out and try again."
      );
    }
  } catch (err) {
    console.log(err);
    dispatch(updateSnackbarMessage("Sign-in failed. Please try again."));
    dispatch(toggleSnackBar(true));
  }
};
