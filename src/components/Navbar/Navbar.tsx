import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

export default function Navbar() {
  const handleScroll = (sectionId:any) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Adjust for navbar height
        behavior: "smooth",
      });
    }
  };
  return (
    <AppBar
      position="absolute"
      sx={{ background: "rgba(0, 0, 0, 0.1)", boxShadow: "none", height: "10vh" }}
    >
      <Toolbar sx={{ justifyContent: "space-between", px: 5, pt:2  }}>
        {/* Logo / Name */}
        <Typography variant="h4" fontWeight="bold" sx={{ color: "white" }}>
          Ushma Dixit
        </Typography>

        {/* Navigation Links */}
        <Box sx={{ display: "flex", gap: 3 , fontSize:"20px"}}>
          {["About", "Projects", "Resume", "Contact"].map((item) => (
            <Button
              key={item}
              onClick={() => handleScroll(item.toLowerCase())}
              sx={{
                color: "white",
                fontSize: "1.5rem",
                fontWeight: "bold",
                textTransform: "none",
              }}
            >
              {item}
            </Button>
          ))}
        </Box>

        {/* Get in Touch Button */}
        <Button
          variant="contained"
          sx={{
            mt: 1,
            width: "250px",
            height:"50px",
            fontSize:"20px",
            backgroundColor: "black",
            color: "white",
            textTransform:"capitalize",
            "&:hover": {
              backgroundColor: "#333", // Slightly lighter black on hover
            },
          }}
        >
          Get in Touch
        </Button>
      </Toolbar>
    </AppBar>
  );
}
