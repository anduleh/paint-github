const email = (state = { value: null, helper: "", error: false }, action) => {
  switch (action.type) {
    case "updateEmailValue":
      return { ...state, value: action.payload };
    case "updateEmailHelper":
      return { ...state, helper: action.payload };
    case "updateEmailError":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default email;
