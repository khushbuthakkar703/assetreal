import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import { LocaleProvider, useLocalStorage } from "../../../assets/locale";
import { ThemeContainer } from "../../../assets/theme";
import { useDispatch } from "react-redux";
import { switchTheme } from "../../redux/actions/appActions";

export const AppContainer: React.FC = ({ children }) => {
  const dispatch = useDispatch();

  const [theme] = useLocalStorage("theme", "light");

  React.useEffect(() => {
    if (theme === "dark") {
      dispatch(switchTheme(true));
    } else {
      dispatch(switchTheme(false));
    }
  }, [dispatch, theme]);

  return (
    <LocaleProvider defaultLocale="en">
      <ThemeContainer>
        <BrowserRouter>{children}</BrowserRouter>
      </ThemeContainer>
    </LocaleProvider>
  );
};
