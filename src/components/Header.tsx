import React from "react";
import styled from "styled-components";
import { CustomSwitch } from "./CustomSwitch.tsx";

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

export const Header = ({ darkMode, onDarkModeChange }) => {
  return (
    <Headers>
      <H1>Harmony</H1>
      <SwitchContainer>
        <CustomSwitch checked={darkMode} onChange={onDarkModeChange} />
      </SwitchContainer>
      <div className="Disc">A collection of chords to attain zen mode.</div>
      <div className="Tagline">
        This app can be used to play multiple audios at the same time and
        customize the volume of each audio that helps you to
        <p>focus, relax and increase concentration</p>
      </div>
    </Headers>
  );
};
