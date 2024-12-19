import { Box, Button } from "@mui/material";
import Section from "../../components/Section";
import colors from "../../theme/colors";

export default function Meetings() {
  return (
    <>
      {/* GENERAL MEETINGS */}
      <Section headingText={"General Meetings"}>
        <Box sx={{ padding: "50px" }}>
          <ul
            style={{
              listStyleType: "square",
            }}
          >
            <li
              style={{
                fontSize: "20px",
                fontFamily: "Roboto Condensed",
              }}
            >
              General Meetings - Mondays @ lunch in A102
            </li>

            <li
              style={{
                fontSize: "20px",
                fontFamily: "Roboto Condensed",
              }}
            >
              <li
                style={{
                  fontSize: "20px",
                  fontFamily: "Roboto Condensed",
                }}
              >
                Make sure to sign up for the email list to be notified of the
                next meeting!
              </li>
            </li>
          </ul>

          <Button
            variant="contained"
            style={{ backgroundColor: colors.darkenedRed }}
          >
            Sign up for the email list
          </Button>
        </Box>
      </Section>

      {/* EVENT COMITTEE MEETINGS */}
      <Section headingText={"Event Committee Meetings"}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "100px",
          }}
        >
          <iframe
            src="https://docs.google.com/spreadsheets/d/1Pxw-E0tvpz3lmbe7QvaOkHmMI2osiYsotI9RxceVAGs/edit?usp=sharing"
            style={{
              width: "1000px",
              height: "450px",
            }}
          />
        </Box>
      </Section>
    </>
  );
}
