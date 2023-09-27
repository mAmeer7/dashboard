import { useMode, ColorModeContext } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from './pages/global/Topbar'
function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={{ colorMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div>
          <Topbar/>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
