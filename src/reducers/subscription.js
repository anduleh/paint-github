const subscription = (state = { hover: "", level: null }, action) => {
  switch (action.type) {
    case "updateSubscriptionHover":
      return { ...state, hover: action.payload };
    case "updateSubscriptionLevel":
      return { ...state, level: action.payload };
    default:
      return state;
  }
};

export default subscription;
