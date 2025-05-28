import React from "react";
import img from "../../../public/Hero.jpg";
import { Box, Typography, Button } from "@mui/material";

export default function Hero() {
  return (
    <Box
      sx={{
        position: "relative",
        height: "95vh",
        backgroundImage: "url('/hero2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "left",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "left",
        color: "white",
        textAlign: "left",
        px: 2,
      }}
    >
      {/* Dark Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Box sx={{ position: "relative", zIndex: 2, px: 4, width: "40%" }}>
        <Typography variant="h1" fontWeight="bold">
          Hi I'm Ushma Dixit
        </Typography>
        <Typography variant="h4" sx={{ mt: 2 }}>
          Software Developer
        </Typography>
        <Button
          variant="contained"
          sx={{
            mt: 3,
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
      </Box>
    </Box>
  );
}
