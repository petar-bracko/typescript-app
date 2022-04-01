import { ThemeContext, change } from "./components/Context";
import { useContext, useState } from "react";
import Effect from "./components/Effect";
import Reducer from "./components/Reducer";
import "./style/App.css";

export default function App() {
  const [currentTheme, setCurrentTheme] = useState(useContext(ThemeContext));

  const changeTheme = (): void => setCurrentTheme(change());

  return (
    <ThemeContext.Provider value={currentTheme}>
      <div className="App">
        <Reducer />
        <Effect />
        <div style={{ marginTop: "50px" }}>
          <button className="themeBtn" onClick={changeTheme}>
            Change theme
          </button>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}
