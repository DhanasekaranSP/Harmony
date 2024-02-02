import React, { useState, useRef } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import { CardActionArea } from "@mui/material";

export const Cardtemplate = ({ imageSrc, title, audioSrc ,darkMode}) => {
  
  const [showSlider, setShowSlider] = useState(false);
  const [volume, setVolume] = useState(50);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(audioSrc));

  const handleCardClick = () => {
    if (isPlaying) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Reset audio to the beginning
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
    setShowSlider(!showSlider);
  };

  const handleSliderChange = (event, newValue) => {
    audioRef.current.volume = newValue / 100;
    event.preventDefault();
    setVolume(newValue);
    console.log(newValue);
  };

  const handleSliderClick = (event) => {
    event.stopPropagation();
  };

  return (
    <CardActionArea>
      <Card
        raised={true}
        onClick={handleCardClick}
        style={{
          width: 200,
          height: 200,
          position: "relative",
          backgroundColor: darkMode? "#303030":"snow",
        }}
      >
        <CardContent style={{ padding: 5 }}>
          <Typography align={"center"} variant="h6">
            {title}
          </Typography>
        </CardContent>

        <CardMedia
          style={{ objectFit: "contain", objectPosition: "center" ,  filter: darkMode? 'invert(1)' : 'none' }}
          component="img"
          height="120"
          image={imageSrc}
          alt="Card Image"
        />

        <CardContent>
          {showSlider && (
            <Slider
            sx={{
              "& .MuiSlider-rail": {
                backgroundColor: darkMode ? "white" : "#aab4be", // Adjust rail color
              },
              "& .MuiSlider-track": {
                backgroundColor: darkMode ? "white" : "#1976d2", // Adjust track color
              },
              "& .MuiSlider-thumb": {
                backgroundColor: darkMode ? "white" : "#001e3c", // Adjust thumb color
              },
            }}
              valueLabelDisplay="auto"
              value={volume}
              onChange={handleSliderChange}
              onClick={handleSliderClick}
              aria-labelledby="continuous-slider"
              style={{
                position: "absolute",
                bottom: 8,
                left: "50%",
                transform: "translateX(-50%)",
                width: "80%",
              }}
            />
          )}
        </CardContent>

        <audio ref={audioRef} loop>
          <source src={audioSrc} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      </Card>
    </CardActionArea>
  );
};
