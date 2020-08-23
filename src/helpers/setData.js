// actions
import {
  updateUsername,
  updateEmailValue,
  updateSubscriptionLevel,
  updateContributions,
} from "../actions";

export default function setData(dispatch, data) {
  // update username, email, subscription level, and contributions
  dispatch(updateUsername(data.username));
  dispatch(updateEmailValue(data.email));
  dispatch(updateSubscriptionLevel(data.subscriptionLevel));
  dispatch(updateContributions(data.contributions));
}
