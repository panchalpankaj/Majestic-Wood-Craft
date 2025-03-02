import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import Slide from "@mui/material/Slide";

const pages = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Projects", path: "/project" },
  { name: "Contact", path: "/contact" },
];

// Styled Component for Glassmorphic Menu with Wider Width
const StyledMenu = styled(Menu)(({ theme }) => ({
  "& .MuiPaper-root": {
    minWidth: "280px", // 👈 Increased Width
    background: "rgba(0, 0, 0, 0.85)", // Dark transparent background
    backdropFilter: "blur(12px)", // Glassmorphism effect
    borderRadius: "14px", // Smooth edges
    padding: "16px",
    border: "1px solid rgba(255, 255, 255, 0.2)", // Subtle border
    boxShadow: "0 0 20px rgba(0, 255, 255, 0.5)", // Neon glow
  },
}));

const StyledMenuItem = styled(MenuItem)({
  padding: "16px 24px", // 👈 More padding for bigger touch areas
  margin: "8px 0",
  fontSize: "20px", // 👈 Increased font size
  fontWeight: "600",
  color: "#fff",
  borderRadius: "10px",
  transition: "0.3s ease",
  "&:hover": {
    background: "rgba(0, 255, 255, 0.2)", // Subtle hover glow
    color: "#00ffff", // Neon cyan color
    transform: "scale(1.07)", // Slight zoom effect
  },
});

function Nav() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" sx={{ background: "rgba(0, 0, 0, 0.9)", boxShadow: "none" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo */}
          <Box sx={{ flexGrow: 1 }}>
            <img src="./log.png" className="h-12 w-28" alt="Logo" />
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            {pages.map((page) => (
              <Button key={page.name} sx={{ color: "white", fontSize: "16px", fontWeight: "500" }} component={Link} to={page.path}>
                {page.name}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ fontSize: 32 }} />
            </IconButton>

            <StyledMenu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              TransitionComponent={Slide}
              TransitionProps={{ direction: "down", timeout: 400 }}
            >
              {pages.map((page) => (
                <StyledMenuItem key={page.name} component={Link} to={page.path} onClick={handleCloseNavMenu}>
                  <Typography variant="h6" textAlign="center">
                    {page.name}
                  </Typography>
                </StyledMenuItem>
              ))}
              <Divider sx={{ background: "rgba(255,255,255,0.2)", margin: "10px 0" }} />
             
            </StyledMenu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Nav;
