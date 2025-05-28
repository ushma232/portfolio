import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  IconButton,
  Link,
} from "@mui/material";
import { Email, Phone, LinkedIn, GitHub } from "@mui/icons-material";
import { motion } from "framer-motion";
import axios from "axios"; // Import axios for API calls

export default function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    query: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e :any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e : any) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("http://localhost:5000/api/send-email", formData);
      alert("Query sent successfully!");
      setFormData({ email: "", phone: "", query: "" }); // Reset form
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send the query. Please try again.");
    }
    setLoading(false);
  };

  return (
    <Box
      sx={{
        minHeight: "80vh",
        backgroundColor: "rgba(0,0,0,0.3)",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid container spacing={6} maxWidth="lg">
        <Grid item xs={12} md={7}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box
              sx={{
                backgroundColor: "#1e1e1e",
                borderRadius: 3,
                p: 4,
                boxShadow: 3,
              }}
            >
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Get In Touch
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  variant="outlined"
                  margin="normal"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  InputLabelProps={{ style: { color: "white" } }}
                  sx={{
                    input: { color: "white" },
                    fieldset: { borderColor: "white" },
                  }}
                />
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="phone"
                  variant="outlined"
                  margin="normal"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  InputLabelProps={{ style: { color: "white" } }}
                  sx={{
                    input: { color: "white" },
                    fieldset: { borderColor: "white" },
                  }}
                />
                <TextField
                  fullWidth
                  label="Your Query"
                  name="query"
                  multiline
                  rows={4}
                  variant="outlined"
                  margin="normal"
                  value={formData.query}
                  onChange={handleChange}
                  required
                   
                  InputLabelProps={{ style: { color: "white" } }}
                  sx={{
                    input: { color: "white" },
                    fieldset: { borderColor: "white" },
                    color:"white"
                  }}
                />
                <Button
                  variant="contained"
                  type="submit"
                  disabled={loading}
                  sx={{
                    mt: 1,
                    width: "250px",
                    height: "50px",
                    fontSize: "20px",
                    backgroundColor: "white",
                    color: "black",
                    "&:hover": { backgroundColor: "#333" },
                  }}
                >
                  {loading ? "Sending..." : "SEND QUERY"}
                </Button>
              </form>
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
}
