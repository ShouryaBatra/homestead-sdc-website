import Section from "../../components/Section";
import LinktreeBox from "../../components/LinktreeBox";
import { Box } from "@mui/material";

export default function Links() {
  return (
    <>
      <Section headingText={"Linktree"}>
        <Box sx={{ padding: "50px" }}>
          <LinktreeBox width={"450px"} />
        </Box>
      </Section>

      <Section headingText={"For Students"}></Section>

      <Section headingText={"For Parents"}></Section>
    </>
  );
}
