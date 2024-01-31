import "./App.css";
import { Cardtemplate } from "./components/Cardtemplate";
import { Header } from "./components/Header";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";

import icon from "./assets/iconimport.js";
import sound from "./assets/soundimport.js";

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
        <Grid item sx="auto">
          <Cardtemplate
            audioSrc={sound[0]}
            title={"Airplane"}
            imageSrc={icon[0]}
          />
        </Grid>
        <Grid item sx="auto">
          <Cardtemplate
            audioSrc={sound[1]}
            title={"Birds"}
            imageSrc={icon[1]}
          />
        </Grid>
        <Grid item sx="auto">
          <Cardtemplate audioSrc={sound[2]} title={"Cafe"} imageSrc={icon[2]} />
        </Grid>
        <Grid item sx="auto">
          <Cardtemplate audioSrc={sound[3]} title={"Fan"} imageSrc={icon[3]} />
        </Grid>
        <Grid item sx="auto">
          <Cardtemplate audioSrc={sound[4]} title={"Fire"} imageSrc={icon[4]} />
        </Grid>
        <Grid item sx="auto">
          <Cardtemplate
            audioSrc={sound[5]}
            title={"Leaves"}
            imageSrc={icon[5]}
          />
        </Grid>
        <Grid item sx="auto">
          <Cardtemplate
            audioSrc={sound[6]}
            title={"Night"}
            imageSrc={icon[6]}
          />
        </Grid>
        <Grid item sx="auto">
          <Cardtemplate audioSrc={sound[7]} title={"Rain"} imageSrc={icon[7]} />
        </Grid>
        <Grid item sx="auto">
          <Cardtemplate
            audioSrc={sound[8]}
            title={"River"}
            imageSrc={icon[8]}
          />
        </Grid>
        <Grid item sx="auto">
          <Cardtemplate audioSrc={sound[9]} title={"Snow"} imageSrc={icon[9]} />
        </Grid>
        <Grid item sx="auto">
          <Cardtemplate
            audioSrc={sound[10]}
            title={"Thunder"}
            imageSrc={icon[10]}
          />
        </Grid>
        <Grid item sx="auto">
          <Cardtemplate
            audioSrc={sound[11]}
            title={"Train"}
            imageSrc={icon[11]}
          />
        </Grid>
        <Grid item sx="auto">
          <Cardtemplate
            audioSrc={sound[12]}
            title={"Walk"}
            imageSrc={icon[12]}
          />
        </Grid>
        <Grid item sx="auto">
          <Cardtemplate
            audioSrc={sound[13]}
            title={"Waves"}
            imageSrc={icon[13]}
          />
        </Grid>
        <Grid item sx="auto">
          <Cardtemplate
            audioSrc={sound[14]}
            title={"White Noise"}
            imageSrc={icon[14]}
          />
        </Grid>
        <Grid item sx="auto">
          <Cardtemplate
            audioSrc={sound[15]}
            title={"Wind"}
            imageSrc={icon[15]}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
