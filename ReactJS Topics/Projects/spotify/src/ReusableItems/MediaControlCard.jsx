import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import { PlayCircleFilledOutlined } from "@mui/icons-material";
import { PauseCircleFilledOutlined } from "@mui/icons-material";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { useNavigate } from "react-router-dom";
import onthefloor from "../assets/onthefloor.mp3";
import { useEffect, useState } from "react";

const usePlay = (file) => {
  let [play] = useState(new Audio(file));
  let [isPlaying, setIsPlaying] = useState(false);
  const toggle = () => setIsPlaying(!isPlaying);
  console.log(play);

  useEffect(() => {
    isPlaying ? play.play() : play.pause();
  });

  useEffect(() => {});

  return [isPlaying, toggle];
};

export default function MediaControlCard({ data }) {
  const theme = useTheme();
  const navigate = useNavigate();
  const [isPlaying, toggle] = usePlay(onthefloor);
  console.log(isPlaying);

  let handleClick = (e) => {
    if (data.user != null) {
      navigate("/");
      console.log(e.target);
    } else {
      navigate("/login");
    }
  };

  return (
    <Card sx={{ display: "flex" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            Live From Space
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: "text.secondary" }}
          >
            Mac Miller
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {theme.direction === "rtl" ? (
              <SkipNextIcon />
            ) : (
              <SkipPreviousIcon />
            )}
          </IconButton>
          <IconButton aria-label="play/pause">
            <div onClick={handleClick}>
              {isPlaying ? (
                <PauseCircleFilledOutlined
                  onClick={toggle}
                  sx={{ height: 38, width: 38 }}
                />
              ) : (
                <PlayCircleFilledOutlined
                  sx={{ height: 38, width: 38 }}
                  onClick={toggle}
                />
              )}
            </div>
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === "rtl" ? (
              <SkipPreviousIcon />
            ) : (
              <SkipNextIcon />
            )}
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="https://cdn.pixabay.com/photo/2026/03/02/22/22/creativecanvasshop-rio-de-janeiro-10152663_1280.png"
        alt="Live from space album cover"
      />
    </Card>
  );
}
