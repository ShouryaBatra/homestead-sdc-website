import { Box, Typography } from "@mui/material";
import Section from "../../components/Section";

export default function Events() {
  return (
    <>
      <Box>
        <Typography
          sx={{
            fontFamily: "Roboto Condensed",
            display: "flex",
            paddingX: "175px",
            paddingY: "20px",
            justifyContent: "center",
            fontSize: "19px",
            textAlign: "center",
          }}
        >
          At SDC, we offer a variety of Speech and Debate events, each led by
          1-2 committee leaders. Students can compete in these events at
          tournaments throughout the year.
        </Typography>

        <Section headingText={"Speech Events"}></Section>
      </Box>
    </>
  );
}
