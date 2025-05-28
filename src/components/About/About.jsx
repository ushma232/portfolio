import React from "react";
import { Box, Typography, Button, Container, Grid, LinearProgress } from "@mui/material";

export default function About() {
  const skills = [
    { name: "JavaScript", value: 90 },
    { name: "React.js", value: 85 },
    { name: "Node.js", value: 80 },
    { name: "MongoDB", value: 75 },
    { name: "Firebase", value: 80 },
  ];

  const skillLogos = [
    { name: "JavaScript", src: "./js-logo.png", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "React.js", src: "./react-1.svg", link: "https://react.dev/" },
    { name: "Node.js", src: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg", link: "https://nodejs.org/" },
    { name: "MongoDB", src: "./mongodb-icon.svg", link: "https://www.mongodb.com/" },
    { name: "Firebase", src: "./firebase-logo.png", link: "https://firebase.google.com/" },
    { name: "Typescript", src: "./typescript.png", link: "https://www.typescriptlang.org/docs/" },
    { name: "Jquery", src: "./jquery-logo.png", link: "https://api.jquery.com/" },
    { name: "Chrome extension", src: "./chrome-extension.png", link: "https://developer.chrome.com/docs/extensions/whats-new" }
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundImage:
          "linear-gradient(to right, rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url('/your-hero-background.jpg')",
        backgroundSize: "cover",
        color: "white",
        px: 8,
        pt: 10, // Added padding
      
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={10} alignItems="center"> 
          {/* Left Column - About Me */}
          <Grid item xs={12} md={6}>
            <Typography variant="h2" fontWeight="bold" gutterBottom>
              About Me
            </Typography>
            <Typography variant="h6" sx={{ opacity: 0.8, mb: 10, mr: 10 }}>
              I am Ushma Dixit, a passionate Software Developer with a knack for 
              creating interactive and scalable web applications. With expertise 
              in JavaScript, React, and modern frontend technologies, I strive to 
              build seamless digital experiences.
            </Typography>
            <Button
              variant="contained"
              sx={{
                mt: 1,
                width: "250px",
                height: "50px",
                fontSize: "20px",
                backgroundColor: "black",
                color: "white",
                "&:hover": {
                  backgroundColor: "#333",
                },
              }}
            >
              Download Resume
            </Button>
          </Grid>

          {/* Right Column - Skills */}
          <Grid item xs={12} md={6}>
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              My Skills
            </Typography>
            {skills.map((skill) => (
              <Box key={skill.name} sx={{ mb: 3 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
                  {skill.name}
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={skill.value}
                  sx={{
                    height: 16,
                    borderRadius: 5,
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    "& .MuiLinearProgress-bar": { backgroundColor: "black" },
                  }}
                />
              </Box>
            ))}
          </Grid>
        </Grid>

        {/* 🔥 Third Section - Clickable Skill Logos */}
        <Box sx={{ mt: 10, textAlign: "center" }}>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Tech Stack
          </Typography>
          <Box 
            sx={{ 
              width:"100%",
              display: "flex", 
              justifyContent: "center", 
              flexWrap: "wrap", 
              gap: 4, 
              mt: 8 
            }}
          >
            {skillLogos.map((skill) => (
              <a 
                key={skill.name} 
                href={skill.link} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Box
                  sx={{
                    width: 110,
                    height: 110,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "50%",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    transition: "0.3s",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.2)",
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  <img src={skill.src} alt={skill.name} width="50%" />
                </Box>
              </a>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
