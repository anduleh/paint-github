const bulbasaur = (state = 0, action) => {
  switch (action.type) {
    case "updateBulbasaur":
      return action.payload;
    default:
      return state;
  }
};

export default bulbasaur;
