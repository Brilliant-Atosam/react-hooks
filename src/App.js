import { useReducer } from "react";
import reducer, { ACTION } from "./reducer";
function App() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    color: false,
    userInput: "",
  });
  return (
    <main className="App" style={{ color: state.color ? "red" : "white" }}>
      <input
        type="text"
        value={state.userInput}
        onChange={(e) =>
          dispatch({ type: ACTION.USER_INPUT, payload: e.target.value })
        }
      />
      <br />
      <br />
      <p>{state.count}</p>
      <section>
        <button onClick={() => dispatch({ type: ACTION.DECREMENT })}>-</button>
        <button onClick={() => dispatch({ type: ACTION.INCREMENT })}>+</button>
        <button onClick={() => dispatch({ type: ACTION.TOGGLE_COLOR })}>
          Color
        </button>
      </section>
      <br />
      <br />
      <p>{state.userInput}</p>
    </main>
  );
}

export default App;
