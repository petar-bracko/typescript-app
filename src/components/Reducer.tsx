import { useContext, useReducer } from "react";
import { ThemeContext } from "./Context";
import "../style/Reducer.css";

interface StateType {
  counter: number;
  textColor: string;
  backgroundColor: string;
}

const reducer = (
  state: StateType,
  { type, payload = "" }: { type: string; payload?: string }
): StateType => {
  switch (type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 };
    case "FONT_COLOR_CHANGE":
      return { ...state, textColor: payload };
    case "BACKGROUND_COLOR_CHANGE":
      return { ...state, backgroundColor: payload };
    default:
      throw new Error();
  }
};

export default function Reducer() {
  const [state, dispatch] = useReducer(reducer, {
    backgroundColor: "black",
    counter: 10,
    textColor: "yellow",
  });

  const theme = useContext(ThemeContext);

  return (
    <div>
      <div
        style={{
          backgroundColor: theme.bgColor,
          color: theme.color,
          padding: "2rem",
        }}
      >
        Reducer state: {JSON.stringify(state)}
      </div>
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
      <div
        style={{
          padding: ".5rem",
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <button
          className="button-73"
          onClick={(): void => dispatch({ type: "INCREMENT" })}
        >
          Increment
        </button>
        <button
          className="button-73"
          onClick={(): void => dispatch({ type: "DECREMENT" })}
        >
          Decrement
        </button>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: ".5rem" }}>
        <div>
          <label>
            Text:
            <input
              className="colorInput"
              type={"string"}
              value={state.textColor}
              onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
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
              onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
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
