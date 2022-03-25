import React, { useReducer } from "react";
import "./App.css";

interface StateType {
  counter: number;
  textColor: string;
  backgroundColor: string;
}

interface ActionType {
  type: string;
  payload?: string;
}

const reducer = (
  state: StateType,
  { type, payload = "" }: ActionType
): StateType => {
  switch (type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1,
      };
    case "FONT_COLOR_CHANGE":
      return {
        ...state,
        textColor: payload,
      };
    case "BACKGROUND_COLOR_CHANGE":
      return {
        ...state,
        backgroundColor: payload,
      };
    default:
      throw new Error();
  }
};

const initState: StateType = {
  backgroundColor: "black",
  counter: 10,
  textColor: "yellow",
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <div className="App">
      <div>{JSON.stringify(state)}</div>
      <div
        style={{
          color: state.textColor,
          backgroundColor: state.backgroundColor,
          padding: "2rem",
          margin: "1rem 0",
        }}
      >
        Counter value: {state.counter}
      </div>
      <div style={{ padding: ".5rem" }}>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          Decrement
        </button>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: ".5rem" }}>
        <div>
          <label>
            Font:
            <input
              className="colorInput"
              type={"string"}
              value={state.textColor}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                dispatch({
                  type: "FONT_COLOR_CHANGE",
                  payload: event.target.value,
                })
              }
            />
          </label>
        </div>
        <div>
          <label>
            Background:
            <input
              className="colorInput"
              type={"string"}
              value={state.backgroundColor}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                dispatch({
                  type: "BACKGROUND_COLOR_CHANGE",
                  payload: event.target.value,
                })
              }
            />
          </label>
        </div>
      </div>
    </div>
  );
}
