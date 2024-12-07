import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import heroBackgroundImg from "../assets/images/heroBackground.jpeg";
import colors from "../theme/colors";

function HeroSection({ heroTitle }) {
  return (
    <Stack
      sx={{
        backgroundImage: `url(${heroBackgroundImg})`,
        justifyContent: "center",
        alignItems: "center",
      }}
      height="400px"
    >
      <Stack
        direction="column"
        spacing={2}
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontSize: "60px",
            fontFamily: "roboto",
            fontWeight: "500",
          }}
        >
          {heroTitle}
        </Typography>
        <Box
          width="100px"
          height="2px"
          sx={{ backgroundColor: colors.darkenedRed, height: "8px" }}
        />
      </Stack>
    </Stack>
  );
}

export default HeroSection;
