import { Box, Icon, Stack, Typography } from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";

function Footer() {
  return (
    <Stack
      direction="column"
      spacing={2}
      sx={{
        justifyContent: "center",
        alignItems: "center",
        height: "200px",
        backgroundColor: "rgba(240, 233, 234, 1)",
      }}
    >
      <Typography>Check out our socials!</Typography>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <InstagramIcon />
        <EmailIcon />
      </Stack>
    </Stack>
  );
}

export default Footer;
