import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Box,
  useMediaQuery,
} from "@mui/material";

const ProjectCard = ({ project }) => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/projects/${project.id}`);
  };

  return (
    <Card
      sx={{
        borderRadius: 4,
        boxShadow: 6,
        display: "flex",
        flexDirection: "column",
        transition: "0.3s",
        overflow: "hidden",
        height: 400, // total height for card
        "&:hover": isSmallScreen ? {} : { transform: "scale(1.05)", boxShadow: 10 },
      }}
    >
      <CardActionArea onClick={handleClick} sx={{ flexGrow: 1 }}>
        <Box sx={{ position: "relative", height: 220, overflow: "hidden" }}>
          <CardMedia
            component="img"
            image={project.image}
            alt={project.title}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover", // this crops/stretch images uniformly
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "30%",
              background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
            }}
          />
        </Box>
        <CardContent sx={{ textAlign: "center", flexGrow: 1 }}>
          <Typography variant="h6" fontWeight="bold" sx={{ fontSize: { xs: "1rem", md: "1.3rem" } }}>
            {project.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}
          >
            {project.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProjectCard;
