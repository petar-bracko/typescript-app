import { useEffect, useState } from "react";

export default function Effect() {
  const [counter, counterSet] = useState<number>(1);

  useEffect(() => {
    console.log("effect");
    document.title = `Count ${counter}`;

    return () => console.log("clean up func");
  }, [counter]);

  return (
    <div style={{ marginTop: "50px" }}>
      <div>Effect counter</div>
      <br />
      <button onClick={(): void => counterSet(counter + 1)}>{counter}</button>
    </div>
  );
}
