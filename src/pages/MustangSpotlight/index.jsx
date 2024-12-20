import { Box, Typography } from "@mui/material";
import React from "react";
import advayImage from "../../assets/images/advayImage.jpg";

function MustangSpotlight() {
  return (
    <>
      <Box
        sx={{
          paddingX: "150px",
          paddingY: "50px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <img
          src={advayImage}
          alt="img"
          style={{ width: "350px", alignSelf: "center", paddingBottom: "15px" }}
        />
        <Typography
          sx={{ fontFamily: "Roboto Condensed", paddingBottom: "15px" }}
        >
          <strong>Name:</strong> Advay Ranade
        </Typography>
        <Typography
          sx={{ fontFamily: "Roboto Condensed", paddingBottom: "15px" }}
        >
          <strong>Grade:</strong> 9th
        </Typography>
        <Typography sx={{ fontFamily: "Roboto Condensed" }}>
          <strong>Accomplishment:</strong> I recently placed 5th in Varsity
          (Open) Congress at the John Lewis SVUDL Invitational, marking the
          first-ever award for Congressional Debate at Homestead High School!
          After three weeks of hard work and practice, I was able to perform
          well despite the tough competition. It was a huge milestone for our
          team and me, and I’m excited to see more students from Homestead
          competing and representing us at future events. Hopefully, this will
          help grow our Speech and Debate team even more!
        </Typography>
      </Box>
    </>
  );
}

export default MustangSpotlight;
