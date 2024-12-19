import { Box, Typography } from "@mui/material";
import React from "react";
import colors from "../theme/colors";

function Section({ children, headingText }) {
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: colors.lightRed,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100px",
          // margin: "10px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "roboto",
            color: colors.darkenedRed,
            fontSize: "25px",
            fontWeight: "900",
          }}
        >
          {headingText}
        </Typography>
      </Box>

      <Box>{children}</Box>
    </Box>
  );
}

export default Section;
