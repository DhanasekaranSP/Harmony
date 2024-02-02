import "./App.css";
import * as React from "react";
import { Cardtemplate } from "./components/Cardtemplate.tsx";
import { Header } from "./components/Header.tsx";
import { CustomSwitch } from "./components/CustomSwitch.tsx";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState, useEffect } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import useMediaQuery from "@mui/material/useMediaQuery";

import icon from "./assets/icons/index.tsx";
import sound from "./assets/sounds/index.tsx";
import titles from "./assets/titles/index.tsx";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [darkMode, setDarkMode] = useState(prefersDarkMode);
  useEffect(() => {
    setDarkMode(prefersDarkMode);
  }, [prefersDarkMode]);

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
        },
      }),
    [darkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <CssBaseline />

        <Header />

        <FormControlLabel
          control={
            <CustomSwitch
              sx={{ position: "fixed", top: 25, right: 0, m: 1 }}
              checked={darkMode}
            />
          }
          onChange={() => {
            setDarkMode(!darkMode);
          }}
        />

        <Grid
          container
          spacing={3}
          justifyContent="center"
          alignItems="center"
          style={{ paddingTop: 25, paddingBottom: 50 }}
        >
          {sound.map((audioSrc, index) => (
            <Grid item key={index} sx="auto">
              <Cardtemplate
                audioSrc={audioSrc}
                title={titles[index]}
                imageSrc={icon[index]}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;
