import React from "react";
import { Box, Typography, Grid, Card, CardContent, CardMedia,Button } from "@mui/material";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    description: "A sleek personal portfolio built with React and MUI.",
    image: "/Hero.jpg",
  },
  {
    title: "CRM Dashboard",
    description: "A CRM system integrated with Firestore and WhatsApp chatbot.",
    image: "/Hero.jpg",
  },
  {
    title: "Form Builder",
    description: "A drag-and-drop form builder using Material-UI and React.",
    image: "/Hero.jpg",
  },
  {
    title: "Portfolio Website",
    description: "A sleek personal portfolio built with React and MUI.",
    image: "/Hero.jpg",
  },
  {
    title: "CRM Dashboard",
    description: "A CRM system integrated with Firestore and WhatsApp chatbot.",
    image: "/Hero.jpg",
  },
  {
    title: "Form Builder",
    description: "A drag-and-drop form builder using Material-UI and React.",
    image: "/Hero.jpg",
  },    
];

export default function     Projects() {
  return (
    <Box
      sx={{
        minHeight: "90vh",
        backgroundColor: "rgba(0,0,0,0.3)",
        color: "white",
        py: 8,
        px: 5,
       
      }}
    >
      <Typography variant="h2" fontWeight="bold" align="center" mb={10} mt={10}>
        My Projects
      </Typography>

      <Grid container spacing={4} justifyContent="center"padding={10} >
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card sx={{ backgroundColor: "black", borderRadius: 3 ,width:"100%", color:"white", height:"40vh"}} >
                <CardMedia
                  component="img"
                  height="180"
                  image={project.image}
                  alt={project.title}
                />
                <CardContent>
                  <Typography variant="h5" fontWeight="bold">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.7, mt: 1 }}>
                    {project.description}
                  </Typography>
                </CardContent>
                <Button
          variant="contained"
          sx={{
            ml: 2,
            width: "180px",
            height:"50px",
            fontSize:"20px",
            backgroundColor: "white",
            color: "black",
            "&:hover": {
              backgroundColor: "#333", // Slightly lighter black on hover
            },
          }}
        >
          Preview
        </Button>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
