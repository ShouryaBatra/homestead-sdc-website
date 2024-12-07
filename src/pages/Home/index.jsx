import { Button, Box } from "@mui/material";
import Header from "../../components/Header";

import colors from "../../theme/colors";

export default function Home() {
  return (
    <>
      <Box height="20px" width="20px" m={"10px"} bgcolor={colors.textRed} />
      <Box height="20px" width="20px" m={"10px"} bgcolor={colors.lightRed} />
      <Box height="20px" width="20px" m={"10px"} bgcolor={colors.darkenedRed} />
    </>
  );
}
