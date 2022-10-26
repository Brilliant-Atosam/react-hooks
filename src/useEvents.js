import { useReducer } from "react";
import reducer, { ACTION } from "./reducer";

const useEvents = () => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    userInput: "",
    color: false,
  });
  const userInputAction = (inputValue) => {
    dispatch({ type: ACTION.USER_INPUT, payload: inputValue });
  };

  const increment = () => dispatch({ type: ACTION.INCREMENT });
  const decrement = () => dispatch({ type: ACTION.DECREMENT });
  const toggleColor = () => dispatch({ type: ACTION.TOGGLE_COLOR });
  return { state, userInputAction, increment, decrement, toggleColor };
};
export default useEvents;
