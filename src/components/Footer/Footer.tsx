import React from "react";
import {
  Box,
  Container,
  Typography,
  IconButton,
  Grid,
  Link,
} from "@mui/material";
import { LinkedIn, GitHub, Twitter, Email } from "@mui/icons-material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#111",
        color: "white",
        py: 5,
      }}
    >
      <Container maxWidth="lg">
        <Grid container justifyContent="center">
          {/* Middle Section - Social Icons */}
          <Grid item xs={12} md={4} textAlign="center">
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Connect with Me
            </Typography>
            <Box display="flex" justifyContent="center" gap={2}>
              <IconButton
                href="https://linkedin.com/in/ushmadixit"
                target="_blank"
                sx={{ color: "white" }}
              >
                <LinkedIn />
              </IconButton>
              <IconButton
                href="https://github.com/ushmadixit"
                target="_blank"
                sx={{ color: "white" }}
              >
                <GitHub />
              </IconButton>
              <IconButton
                href="https://twitter.com/ushmadixit"
                target="_blank"
                sx={{ color: "white" }}
              >
                <Twitter />
              </IconButton>
              <IconButton
                href="mailto:ushmadixit@gmail.com?subject=Let's Connect&body=Hi Ushma,"
                sx={{ color: "white" }}
              >
                <Email />
              </IconButton>
            </Box>
          </Grid>

          {/* Right Section - Copyright */}
          <Grid item xs={12} md={4} textAlign={{ xs: "center", md: "right" }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Portfolio
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.7 }}>
              © {new Date().getFullYear()} Ushma Dixit. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
