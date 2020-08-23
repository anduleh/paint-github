const confirmation = (state = false, action) => {
  switch (action.type) {
    case "openConfirmation":
      return true;
    case "closeConfirmation":
      return false;
    default:
      return state;
  }
};

export default confirmation;
