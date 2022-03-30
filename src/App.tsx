import { ThemeContext, change } from "./components/Context";
import { useContext, useState } from "react";
import Effect from "./components/Effect";
import Reducer from "./components/Reducer";
import "./style/App.css";

export default function App() {
  const [currentTheme, currentThemeSet] = useState(useContext(ThemeContext));

  const changeTheme = (): void => currentThemeSet(change());

  return (
    <ThemeContext.Provider value={currentTheme}>
      <div className="App">
        <Reducer />
        <Effect />
        <div style={{ marginTop: "50px" }}>
          <button onClick={changeTheme}>Change theme</button>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}
