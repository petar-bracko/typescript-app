import Effect from "./components/Effect";
import Reducer from "./components/Reducer";
import { ThemeContext, change } from "./components/Context";
import "./style/App.css";
import { useContext, useState } from "react";

export default function App() {
  const [currentTheme, currentThemeSet] = useState(useContext(ThemeContext));

  const changeTheme = (): void => currentThemeSet(change());

  return (
    <ThemeContext.Provider value={currentTheme}>
      <div className="App">
        <Reducer />
        <Effect />
        <div style={{ marginTop: "50px" }}>
          <button onClick={changeTheme}>Change</button>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}
