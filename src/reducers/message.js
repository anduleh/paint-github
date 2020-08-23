const message = (state = "", action) => {
  switch (action.type) {
    case "updateMessage":
      return action.payload;
    default:
      return state;
  }
};

export default message;
