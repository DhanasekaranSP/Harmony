import "./App.css";
import * as React from "react";
import { useState, useEffect } from "react";

import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import { Cardtemplate } from "./components/Cardtemplate.tsx";
import { Header } from "./components/Header.tsx";
import icon from "./assets/icons/index.tsx";
import sound from "./assets/sounds/index.tsx";
import titles from "./assets/titles/index.tsx";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [darkMode, setDarkMode] = useState(prefersDarkMode);
  const [muted, setMuted] = useState(false);
  const [reset, setReset] = useState(false);

  const toggleReset = () => {
    setReset(!reset);
  };

  const toggleMute = () => {
    setMuted(!muted);
  };

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
        <Header
          darkMode={darkMode}
          onDarkModeChange={() => {
            setDarkMode(!darkMode);
          }}
          onToggleMute={toggleMute}
          ontoggleReset={toggleReset}
          muted={muted}
        />

        <Grid
          container
          spacing={3}
          justifyContent="center"
          alignItems="center"
          style={{
            paddingTop: 10,
            paddingBottom: 50,
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          {sound.map((audioSrc, index) => (
            <Grid item key={index} sx="auto">
              <Cardtemplate
                audioSrc={audioSrc}
                title={titles[index]}
                imageSrc={icon[index]}
                darkMode={darkMode}
                muted={muted}
                reset={reset}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;
