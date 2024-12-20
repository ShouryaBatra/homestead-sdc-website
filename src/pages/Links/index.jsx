import Section from "../../components/Section";
import LinktreeBox from "../../components/LinktreeBox";
import { Box, Typography } from "@mui/material";

export default function Links() {
  return (
    <>
      <Section headingText={"Linktree"}>
        <Box sx={{ padding: "50px" }}>
          <LinktreeBox width={"450px"} />
        </Box>
      </Section>

      <Section headingText={"For Students"}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            paddingX: "150px",
            paddingY: "50px",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ paddingY: "10px" }}>
              Form to link your tabroom account:
            </Typography>

            <Box sx={{ paddingY: "10px" }}>
              <Typography>Submit your monster packet:</Typography>
              <ul>
                <li>
                  <Typography>Upload as a PDF to: </Typography>
                </li>
              </ul>
            </Box>

            <Typography sx={{ paddingY: "10px" }}>
              NSDA Membership (after paying):
            </Typography>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Typography>MONSTER PACKETS:</Typography>
            <Typography>Competitor Checklist: link</Typography>
          </Box>
        </Box>
      </Section>

      <Section headingText={"For Parents"}></Section>
    </>
  );
}
