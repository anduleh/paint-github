const page = (state = "home", action) => {
  switch (action.type) {
    case "updatePage":
      return action.payload;
    default:
      return state;
  }
};

export default page;
