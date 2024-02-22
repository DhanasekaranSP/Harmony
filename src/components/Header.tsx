import React from "react";
import styled from "styled-components";
import { CustomSwitch } from "./CustomSwitch.tsx";
import { IconButton } from "@mui/material";
import VolumeUpRoundedIcon from "@mui/icons-material/VolumeUpRounded";
import VolumeOffRoundedIcon from "@mui/icons-material/VolumeOffRounded";

const Headers = styled.header`
  max-width: 70rem;
  margin: auto;
  padding-top: 1%;
  text-align: center;
  position: relative;
`;

const H1 = styled.h1`
  font-family: "Courier", sans-serif;
  font-size: 50px;
  display: inline-block;
  margin-right: 20px;
`;

const SwitchContainer = styled.div`
  position: absolute;
  top: 30px;
  right: 20px;
`;

export const Header = ({ darkMode, onDarkModeChange, onToggleMute, muted }) => {
  return (
    <Headers>
      <H1>Harmony</H1>
      <SwitchContainer>
        <CustomSwitch checked={darkMode} onChange={onDarkModeChange} />
      </SwitchContainer>
      <div className="Disc">A collection of chords to attain zen mode.</div>
      <div className="Tagline" style={{ paddingBottom: 10 }}>
        This app can be used to play multiple audios at the same time and
        customize the volume of each audio that helps you to
        <p>focus, relax and increase concentration</p>
      </div>

      <IconButton
        onClick={onToggleMute}
        size="large"
        sx={{
          boxShadow: 5,
          backgroundColor: darkMode ? "#303030" : "snow",
        }}
      >
        {muted ? <VolumeOffRoundedIcon /> : <VolumeUpRoundedIcon />}
      </IconButton>
    </Headers>
  );
};
