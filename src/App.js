import { useReducer } from "react";
import useEvent from "./useEvents";
import reducer, { ACTION } from "./reducer";
function App() {
  const { state, userInputAction, increment, decrement, toggleColor } =
    useEvent();
  // const [state, dispatch] = useReducer(reducer, {
  //   count: 0,
  //   color: false,
  //   userInput: "",
  // });
  console.log(state);
  return (
    <main className="App" style={{ color: state.color ? "red" : "white" }}>
      <input
        type="text"
        value={state.userInput}
        onChange={(e) =>
          // dispatch({ type: ACTION.USER_INPUT, payload: e.target.value })
          userInputAction(e.target.value)
        }
      />
      <br />
      <br />
      <p>{state.count}</p>
      <section>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
        <button onClick={toggleColor}>Color</button>
      </section>
      <br />
      <br />
      <p>{state.userInput}</p>
    </main>
  );
}

export default App;
