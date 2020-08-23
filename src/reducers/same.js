const same = (state = true, action) => {
  switch (action.type) {
    case "same":
      return true;
    case "notSame":
      return false;
    default:
      return state;
  }
};

export default same;
