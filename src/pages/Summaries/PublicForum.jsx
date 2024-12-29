import React from "react";
import SummaryAccordian from "../../components/SummaryAccordian";
import { Box, Typography } from "@mui/material";
import colors from "../../theme/colors";

function PublicForum() {
  return (
    <div style={{ paddingLeft: "125px", paddingRight: "125px" }}>
      <SummaryAccordian title={"CM #7 Recap"}>
        <Box sx={{ paddingBottom: "7px" }}>
          <Typography
            sx={{
              fontWeight: "bold",
              textDecoration: "underline",

              color: colors.darkenedRed,
            }}
          >
            Format:
          </Typography>

          <ul style={{ listStyleType: "square" }}>
            <li>Back and forth questioning period between speakers.</li>
          </ul>
        </Box>
        <Box sx={{ paddingBottom: "7px" }}>
          <Typography
            sx={{
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            Do's:
          </Typography>

          <ul style={{ listStyleType: "square" }}>
            <li>Keep your answers short and sweet</li>
            <li>Be specific to the question</li>
            <li>Ask LEADING, not OPEN questions</li>
            <li>Keep eye contact with the judge</li>
            <li>
              Conduct yourself respectfully, but also make sure to be firm when
              required
            </li>
            <li>Maintain proper decorum</li>
          </ul>
        </Box>

        <Box sx={{ paddingBottom: "7px" }}>
          <Typography
            sx={{
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            Don'ts:
          </Typography>

          <ul style={{ listStyleType: "square" }}>
            <li>
              Ask open ended questions that give them the chance to ramble about
              their case
            </li>
            <li>Interrupt your opponent or shout</li>
            <li>
              Speak more about your case (this is a time for{" "}
              <b style={{ fontWeight: "normal", textDecoration: "underline" }}>
                just
              </b>{" "}
              questions!)
            </li>
          </ul>
        </Box>
      </SummaryAccordian>
    </div>
  );
}

export default PublicForum;
