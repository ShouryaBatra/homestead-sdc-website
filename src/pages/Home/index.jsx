import { Button, Box } from "@mui/material";
import Header from "../../components/Header";

import colors from "../../theme/colors";
import Section from "../../components/Section";

export default function Home() {
  return (
    <>
      {/* <Box height="20px" width="20px" m={"10px"} bgcolor={colors.textRed} />
      <Box height="20px" width="20px" m={"10px"} bgcolor={colors.lightRed} />
      <Box height="20px" width="20px" m={"10px"} bgcolor={colors.darkenedRed} /> */}

      <Section headingText={"Welcome to our Club Website!"}>
        <ul style={{ listStyleType: "disc" }}>
          <li>Check out our committee meeting times in the meetings tab!</li>
        </ul>
      </Section>
    </>
  );
}
