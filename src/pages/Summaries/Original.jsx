import { Box, Typography } from "@mui/material";
import React from "react";
import SummaryAccordian from "../../components/SummaryAccordian";

function Original() {
  return (
    <div
      style={{
        paddingLeft: "125px",
        paddingRight: "125px",
        paddingBottom: "120px",
      }}
    >
      <SummaryAccordian title={"Meeting Committee #8"}>
        <Box>
          <Typography>Key topics:</Typography>
          <ul style={{ listStyleType: "square" }}>
            <li>Reviewed speeches and gave adequate feedback</li>
            <li>Went over Original Drive Folder</li>
          </ul>
        </Box>
        <Typography>
          Contact Sara for more information: smohsin182@student.fuhsd.org
        </Typography>
      </SummaryAccordian>
    </div>
  );
}

export default Original;
