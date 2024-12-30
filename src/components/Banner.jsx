import { Height } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import colors from "../theme/colors";

function Banner() {
  return (
    <Box
      sx={{
        minHeight: "64px",
        backgroundColor: colors.darkenedRed,
        padding: "12px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        "@media (max-width: 600px)": {
          flexDirection: "column",
        },
      }}
    >
      <Box
        sx={{
          display: "inline-flex",
          width: "fit-content",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            display: "flex",
            fontSize: "16px",
            width: "fit-content",
            color: "white",
          }}
        >
          Mustang Spotlight: Advay received 5th in Varsity (Open) Congress at
          the John Lewis SVUDL Invitational marking a historic first win for
          Congress!
        </Typography>
      </Box>
      <Box
        sx={{
          display: "inline",
        }}
      >
        <Button
          size="small"
          variant="outlined"
          color="black"
          onClick={() => {
            window.location.href = "/mustang-spotlight";
          }}
        >
          Click here to read more
        </Button>
      </Box>
    </Box>
  );
}

export default Banner;
