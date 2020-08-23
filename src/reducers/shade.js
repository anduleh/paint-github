const shade = (state = 2, action) => {
  switch (action.type) {
    case "updateShade":
      return action.payload;
    default:
      return state;
  }
};

export default shade;
