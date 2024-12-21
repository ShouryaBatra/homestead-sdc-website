import { Box, Typography } from "@mui/material";
import colors from "../../theme/colors";

export default function About() {
  return (
    <>
      <Box sx={{ display: "flex", justifyItems: "center", padding: "150px" }}>
        <Typography
          sx={{
            fontSize: "20px",
            fontFamily: "Roboto Condensed",
            textAlign: "center",
            margin: "20px, 0",
            lineHeight: "50px",
          }}
        >
          Speech and Debate Club (SDC) is a student-run club that develops
          skills in public speaking and debate and forms a community of students
          who share similar interests. The club raises awareness of worldwide
          topics and represents Homestead in tournaments against other schools.
          We welcome students of all levels of experience as our officers will
          guide them towards improving their skills and preparing for
          tournaments.
        </Typography>
      </Box>

      <Box
        sx={{
          backgroundColor: colors.darkenedRed,
          display: "flex",
          alignContent: "center",
        }}
      >
        <Typography>Meet the Team</Typography>
      </Box>
    </>
  );
}
