const check = (state = true, action) => {
  switch (action.type) {
    case "check":
      return true;
    case "uncheck":
      return false;
    default:
      return state;
  }
};

export default check;
