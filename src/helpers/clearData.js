// actions
import {
  updateUsername,
  updateContributions,
  updateSubscriptionHover,
  updateSubscriptionLevel,
  updateEmailValue,
  updateEmailHelper,
  updateEmailError,
  toggleLogin,
  updateShade,
  toggleConfirmation,
  toggleSame,
  updateSubmit,
  updateMessage,
  updateBulbasaur,
} from "../actions";

export default function clearData(dispatch) {
  // clear username
  dispatch(updateUsername(null));
  // clear contributions
  dispatch(updateContributions(null));
  // clear subscriptions
  dispatch(updateSubscriptionHover(""));
  dispatch(updateSubscriptionLevel(null));
  // clear email
  dispatch(updateEmailValue(null));
  dispatch(updateEmailHelper(""));
  dispatch(updateEmailError(false));
  // clear login
  dispatch(toggleLogin(false));
  // clear shade
  dispatch(updateShade(2));
  // clear confirmation
  dispatch(toggleConfirmation(false));
  // clear same
  dispatch(toggleSame(true));
  // clear submit
  dispatch(updateSubmit("enabled"));
  // clear message
  dispatch(updateMessage(""));
  // clear bulbasaur
  dispatch(updateBulbasaur(0));
}
