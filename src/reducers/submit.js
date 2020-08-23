const submit = (state = "enabled", action) => {
  switch (action.type) {
    case "updateSubmit":
      return action.payload;
    default:
      return state;
  }
};

export default submit;
