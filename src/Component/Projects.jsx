import React from "react";
import { Container, Grid } from "@mui/material";
import Nav from "./Nav";
import Footer from "./Foter";
import Maps from "./Maps";
import WhatsAppButton from "./Whatsapp";
import ProjectCard from "./ProjectCard"; 

const projects = [
  { id: 1, title: "Nikol Project", image: "./NikoleProjectimg/hall1.jpg", description: "Click The Card For More Details" },
];

const Projects = () => {
  return (
    <>
      <Nav />
      <WhatsAppButton />
      <Container sx={{ mt: 10, mb: 5, py: 3 }}> {/* Top & Bottom Padding */}
        <Grid container spacing={3} justifyContent="center">
          {projects.map((project) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={project.id}>
              {/* Large screen par ek row me 4 cards, medium par 3, small par 2, mobile par 1 */}
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
