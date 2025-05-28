import { Accordion, AccordionSummary, AccordionDetails, Button, Typography, Card, CardContent, Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import WorkIcon from "@mui/icons-material/Work";
import BusinessIcon from "@mui/icons-material/Business";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function ResumeSection() {

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/reciept.pdf"; 
    link.download = "My_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <Box sx={{ backgroundColor: "rgba(0,0,0,0.3)", padding: "50px", textAlign: "center" }}>
      {/* Title Section */}
      <Typography variant="h4" fontWeight="bold" gutterBottom color="white" fontSize="50px">
         Resume
      </Typography>
      
      {/* Download CV Button */}
      <Button variant="contained" onClick={handleDownload} sx={{ backgroundColor: "black", color: "#fff", marginBottom: "20px" }}>
        Download CV
      </Button>
      
      {/* Experience Section */}
      <Typography variant="h5" fontWeight="bold" textAlign="left" sx={{ marginBottom: "20px", color:"white"}}>
        Experience
      </Typography>
      
      {/* Collapsible Experience Cards */}
      <Accordion sx={{ backgroundColor: "black", borderRadius: "10px", boxShadow: 3 , width:"100%", textAlign:"left",  marginBottom:"20px"  }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography fontWeight="bold" color="white" sx={{ fontSize: "25px"}}>
            2025 - Present | Associate Software Engineer
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Card sx={{ boxShadow: "none", backgroundColor: "transparent" ,color:"white"}}>
            <CardContent>
            <Typography variant="subtitle1"  sx={{ fontSize: "22px"}}><BusinessIcon sx={{ verticalAlign: "middle", mr: 1 ,fontSize: "30px"}} />Prologic Technologies</Typography>
              <Typography variant="subtitle1"  sx={{ fontSize: "22px"}}><LocationOnIcon  sx={{ verticalAlign: "middle", mr: 1,fontSize: "30px" }} />Mohali  </Typography>
              <Typography variant="body2" color="white">
                I'm a paragraph. Click here to add your own text and edit me. Just click “Edit
                Text” or double-click me to change the content.
              </Typography>
            </CardContent>
          </Card>
        </AccordionDetails>

        
      </Accordion>
      <Accordion sx={{ backgroundColor: "black", borderRadius: "10px", boxShadow: 3 , width:"100%", textAlign:"left", marginBottom:"20px" }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography fontWeight="bold" color="white" sx={{ fontSize: "25px"}}>
            2023 - 2025 | Associate Consultant Software Developer
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Card sx={{ boxShadow: "none", backgroundColor: "transparent" ,color:"white"}}>
            <CardContent>
            <Typography variant="subtitle1"  sx={{ fontSize: "22px"}}><BusinessIcon sx={{ verticalAlign: "middle", mr: 1 ,fontSize: "30px"}} />Seasia Infotech</Typography>
              <Typography variant="subtitle1"  sx={{ fontSize: "22px"}}><LocationOnIcon  sx={{ verticalAlign: "middle", mr: 1,fontSize: "30px" }} />Mohali  </Typography>
              <Typography variant="body2" color="white">
                I'm a paragraph. Click here to add your own text and edit me. Just click “Edit
                Text” or double-click me to change the content.
              </Typography>
            </CardContent>
          </Card>
        </AccordionDetails>

        
      </Accordion>
    </Box>
  );
}
