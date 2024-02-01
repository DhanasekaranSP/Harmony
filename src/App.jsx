import "./App.css";
import { Cardtemplate } from "./components/Cardtemplate.js";
import { Header } from "./components/Header.js";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";

import icon from "./assets/icons/index.tsx";
import sound from "./assets/sounds/index.tsx";
import titles from "./assets/titles/index.tsx";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Header />
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
  );
}

export default App;
