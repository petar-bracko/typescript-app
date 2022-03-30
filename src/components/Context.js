import { createContext } from "react";

const themes = {
  light: { bgColor: "white", color: "black", active: true },
  dark: { bgColor: "black", color: "white", active: false },
};

let activeTheme = themes.light;

const change = () => {
  themes.light = { ...themes.light, active: !themes.light.active };
  themes.dark = { ...themes.dark, active: !themes.dark.active };

  return (activeTheme = themes.dark.active ? themes.dark : themes.light);
};

const ThemeContext = createContext(activeTheme);

export { ThemeContext, change };
