const snackbar = (state = { message: "", show: false }, action) => {
  switch (action.type) {
    case "showSnackbar":
      return { ...state, show: true };
    case "hideSnackbar":
      return { ...state, show: false };
    case "updateSnackbarMessage":
      return { ...state, message: action.payload };
    default:
      return state;
  }
};

export default snackbar;
