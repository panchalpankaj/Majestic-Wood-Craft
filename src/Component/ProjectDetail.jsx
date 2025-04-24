import React from "react";
import { useParams } from "react-router-dom";
import { Container, Typography, Box, IconButton } from "@mui/material";
import Slider from "react-slick";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Foter";
import Maps from "./Maps";
import WhatsAppButton from "./Whatsapp";
import { styled } from "@mui/system";


const ProjectContainer = styled(Container)({
  marginTop: "50px",
  marginBottom: "80px",
  textAlign: "center",
  padding: "20px",
});

const Title = styled(Typography)({
  fontSize: "2.2rem",
  fontWeight: "bold",
  textAlign: "center",
  marginBottom: "10px",
  color: "#333",
});

const Description = styled(Typography)({
  fontSize: "1.2rem",
  color: "#666",
  maxWidth: "800px",
  margin: "0 auto 30px",
  lineHeight: "1.6",
});

const SliderContainer = styled(Box)({
  maxWidth: "90%",
  maxWidth: "800px",
  margin: "auto",
  position: "relative",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  borderRadius: "10px",
  overflow: "hidden",
});

const Image = styled("img")({
  width: "100%",
  height: "400px",
  objectFit: "cover",
  borderRadius: "8px",
});

const ArrowButton = styled(IconButton)({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  color: "white",
  zIndex: 10,
  "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.9)" },
});

const projectData = {
  1: {
    title: "Nikol Project",
    images: [
      "../NikoleProjectimg/bedroom.jpg",
      "../NikoleProjectimg/bedroom2.jpg",
      "../NikoleProjectimg/bedroom3.jpg",
      "../NikoleProjectimg/bedroom4.jpg",
      "../NikoleProjectimg/bedroom5.jpg",
      "../NikoleProjectimg/bedroom6.jpg",
      "../NikoleProjectimg/dining.jpg",
      "../NikoleProjectimg/diningwithhall.jpg",
      "../NikoleProjectimg/diningkitchen.jpg",
      "../NikoleProjectimg/door.jpg",
      "../NikoleProjectimg/hall1.jpg",
      "../NikoleProjectimg/hall2.jpg",
      "../NikoleProjectimg/hall3.jpg",
      "../NikoleProjectimg/temple.jpg",
      "../NikoleProjectimg/tvkabinate.jpg",
      "../NikoleProjectimg/wall.jpg",
    ],
    description: "This is a detailed page for the Nikol Project.",
  },
  2: {
    title: "PrahladNagar Project",
    images: [
      "../Prahladnagar/cabat_image.jpg",
      "../Prahladnagar/full_white_cabat.jpg",
      "../Prahladnagar/white_cabat.jpg",
    ],
    description: "This is a detailed page for the PrahladNagar Project.",
  },
  3: {
    title: "Silaj Project",
    images: [
      "../Silaj/bed_and_hall.jpg",
      "../Silaj/bed.jpg",
      "../Silaj/bed2.jpg",
      "../Silaj/bed3.jpg",
      "../Silaj/bed4.jpg",
      "../Silaj/cabat.jpg",
      "../Silaj/cabat2.jpg",
      "../Silaj/cabat3.jpg",
      "../Silaj/dining.jpg",
      "../Silaj/dining2.jpg",
      "../Silaj/dressing.jpg",
      "../Silaj/furniture.jpg",
      "../Silaj/holl.jpg",
      "../Silaj/kitchen.jpg",
      "../Silaj/kitchen2.jpg",
      "../Silaj/sidebox_whit_bed.jpg",
      "../Silaj/sidebox.jpg",
      "../Silaj/tv_cabinate.jpg",
      "../Silaj/tv_unit.jpg",
      "../Silaj/white_cabat.jpg",
     
    ],
    description: "This is a detailed page for the Silaj Project.",
  },
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectData[id];

  if (!project) {
    return (
      <Typography variant="h4" sx={{ textAlign: "center", mt: 5 }}>
        Project Not Found
      </Typography>
    );
  }

  const sliderRef = React.useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <>
      <ProjectContainer>
        <Title>{project.title}</Title>
        <Description>{project.description}</Description>

        <SliderContainer>
          <ArrowButton
            sx={{ left: 10 }}
            onClick={() => sliderRef.current?.slickPrev()}
          >
            <ArrowBackIos />
          </ArrowButton>

          <Slider ref={sliderRef} {...settings}>
            {project.images.map((img, index) => (
              <Box
                key={index}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Image src={img} alt={`Project Image ${index}`} />
              </Box>
            ))}
          </Slider>

          <ArrowButton
            sx={{ right: 10 }}
            onClick={() => sliderRef.current?.slickNext()}
          >
            <ArrowForwardIos />
          </ArrowButton>
        </SliderContainer>
      </ProjectContainer>
      <WhatsAppButton />
      <Maps />
      <Footer />
    </>
  );
};

export default ProjectDetail;
