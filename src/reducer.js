export const ACTION = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  USER_INPUT: "userInput",
  TOGGLE_COLOR: "toggleColor",
};
const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.INCREMENT:
      return { ...state, count: state.count + 1 };
      break;
    case ACTION.DECREMENT:
      return { ...state, count: state.count - 1 };
      break;
    case ACTION.USER_INPUT:
      return { ...state, userInput: action.payload };
      break;
    case ACTION.TOGGLE_COLOR:
      return { ...state, color: !state.color };
      break;

    default:
      break;
  }
};
export default reducer;
