const contributions = (state = null, action) => {
  switch (action.type) {
    case "updateContributions":
      return action.payload;
    default:
      return state;
  }
};

export default contributions;
