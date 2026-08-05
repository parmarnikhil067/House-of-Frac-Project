import React, { useEffect } from "react";
import Pages from "./pages";
import { useThemeStore } from "./stores";
import { applyTheme } from "./utils/theme.utils";

function App() {
  const { theme } = useThemeStore();

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return (
    <React.Fragment>
        <Pages />
    </React.Fragment>
  );
}

export default App;
