import { combineReducers } from "redux";

// paint reducers
import username from "./reducers/username.js";
import contributions from "./reducers/contributions.js";
import message from "./reducers/message.js";
import confirmation from "./reducers/confirmation.js";
import login from "./reducers/login.js";
import same from "./reducers/same.js";
import email from "./reducers/email.js";
import submit from "./reducers/submit.js";
import snackbar from "./reducers/snackbar.js";
import page from "./reducers/page.js";
import subscription from "./reducers/subscription.js";
import shade from "./reducers/shade.js";
import bulbasaur from "./reducers/bulbasaur.js";

const allReducers = combineReducers({
  username,
  contributions,
  subscription,
  message,
  confirmation,
  login,
  same,
  email,
  submit,
  snackbar,
  page,
  shade,
  bulbasaur,
});

export default allReducers;
