import React from "react";
import { Container, Grid } from "@mui/material";
import Nav from "./Nav";
import Footer from "./Foter";
import Maps from "./Maps";
import WhatsAppButton from "./Whatsapp";
import ProjectCard from "./ProjectCard"; 

const projects = [
  { id: 1, title: "Nikol Project", image: "./NikoleProjectimg/hall1.jpg", description: "Click The Card For More Details" },
  { id: 2, title: "PrahladNagar  Project", image: "./Prahladnagar/white_cabat.jpg", description: "Click The Card For More Details" },
  { id: 3, title: "Silaj  Project", image: "./Silaj/tv_unit.jpg", description: "Click The Card For More Details" },
];

const Projects = () => {
  return (
    <>
      <Nav />
      <WhatsAppButton />
      <Container sx={{ mt: 10, mb: 5, py: 3 }}> 
        <Grid container spacing={3} justifyContent="center">
          {projects.map((project) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={project.id}>
              
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Maps />
      <Footer />
    </>
  );
};

export default Projects;
