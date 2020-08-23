const snapshot = (state = 1, action) => {
  switch (action.type) {
    case "updateSnapshot":
      return action.payload;
    default:
      return state;
  }
};

export default snapshot;
