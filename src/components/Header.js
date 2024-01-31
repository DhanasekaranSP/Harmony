import React from "react";
import styled from "styled-components";

const Headers = styled.header`
  max-width: 70rem;
  margin: auto;
  padding-top: 1%;
  text-align: center;
`;

const H1 = styled.h1`
  font-family: "Courier", sans-serif;
  font-size: 50px;
`;

export const Header = () => {
  return (
    <Headers>
      <H1>Harmony</H1>
      <div className="Disc">A collection of chords to attain zen mode.</div>
      <div className="Tagline">
        This app can be used to play multiple audios at the same time and
        customize the volume of each audio that helps you to
        <p>focus, relax and increase concentration</p>
      </div>
    </Headers>
  );
};
