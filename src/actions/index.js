// username
export const updateUsername = (username) => {
  return {
    type: "updateUsername",
    payload: username,
  };
};

// contributions

export const updateContributions = (contributions) => {
  return {
    type: "updateContributions",
    payload: contributions,
  };
};

// subscriptions

export const updateSubscriptionHover = (subscriptionHoverLevel) => {
  return {
    type: "updateSubscriptionHover",
    payload: subscriptionHoverLevel,
  };
};

export const updateSubscriptionLevel = (subscriptionLevel) => {
  return {
    type: "updateSubscriptionLevel",
    payload: subscriptionLevel,
  };
};

// email

export const updateEmailValue = (emailValue) => {
  return {
    type: "updateEmailValue",
    payload: emailValue,
  };
};

export const updateEmailHelper = (emailHelper) => {
  return {
    type: "updateEmailHelper",
    payload: emailHelper,
  };
};

export const updateEmailError = (emailError) => {
  return {
    type: "updateEmailError",
    payload: emailError,
  };
};

// login

export const toggleLogin = (login) => {
  return login
    ? {
        type: "login",
      }
    : {
        type: "logout",
      };
};

// snackbar

export const updateSnackbarMessage = (message) => {
  return {
    type: "updateSnackbarMessage",
    payload: message,
  };
};

export const toggleSnackBar = (show) => {
  return show
    ? {
        type: "showSnackbar",
      }
    : {
        type: "hideSnackbar",
      };
};

// shade

export const updateShade = (index) => {
  return { type: "updateShade", payload: index };
};

// page

export const updatePage = (page) => {
  return { type: "updatePage", payload: page };
};

// confirmation

export const toggleConfirmation = (confirmation) => {
  return confirmation
    ? {
        type: "openConfirmation",
      }
    : {
        type: "closeConfirmation",
      };
};

// same

export const toggleSame = (same) => {
  return same
    ? {
        type: "same",
      }
    : {
        type: "notSame",
      };
};

// submit button

export const updateSubmit = (submit) => {
  return { type: "updateSubmit", payload: submit };
};

// message

export const updateMessage = (message) => {
  return { type: "updateMessage", payload: message };
};

// bulbasaur
export const updateBulbasaur = (bulbasaur) => {
  return { type: "updateBulbasaur", payload: bulbasaur };
};
