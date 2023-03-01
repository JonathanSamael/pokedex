import { useContext } from "react";
import { ButtonStyle } from "../button/button.styled";
import { ThemeContext, themes } from "../contexts/themeContext";

export const ThemeToggleButton = (props) => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <ButtonStyle
      theme={theme}
      onClick={() =>
        setTheme(theme === themes.light ? themes.dark : themes.light)
      }
    >{props.children}</ButtonStyle>
  );
};
