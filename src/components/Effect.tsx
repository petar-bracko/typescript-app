import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./Context";

export default function Effect() {
  const [counter, setCOunter] = useState<number>(1);

  const theme = useContext(ThemeContext);

  useEffect(() => {
    document.title = `Count ${counter}`;
  }, [counter]);

  return (
    <div
      style={{
        marginTop: "50px",
        padding: "2rem",
        backgroundColor: theme.bgColor,
        color: theme.color,
      }}
    >
      <div>Effect counter</div>
      <br />
      <button onClick={(): void => setCOunter(counter + 1)}>{counter}</button>
    </div>
  );
}
