import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ResumeSection from './components/Resume/Resume';
import { Box, Typography } from '@mui/material';

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Box id="Hero">
        <Typography variant="h3"><Hero/></Typography>
      </Box>
      <Box id="about" >
        <Typography variant="h3"><About/></Typography>
      </Box>
      <Box id="projects" >
        <Typography variant="h3"><Projects/></Typography>
      </Box>
      <Box id="resume">
        <Typography variant="h3"><ResumeSection/></Typography>
      </Box>
      <Box id="contact">
        <Typography variant="h3"><Contact/></Typography>
      </Box>
      <Box id="footer">
        <Typography variant="h3"><Footer/></Typography>
      </Box>
    
    </div>
  );
}

export default App;
