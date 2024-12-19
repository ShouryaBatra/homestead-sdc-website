import {
  Button,
  Box,
  Typography,
  CardActionArea,
  CardMedia,
} from "@mui/material";
import Header from "../../components/Header";

import colors from "../../theme/colors";
import Section from "../../components/Section";

import logoImage from "../../assets/images/logo.png";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import logoBanner from "../../assets/images/logoBanner.jpeg";
import LinktreeBox from "../../components/LinktreeBox";

export default function Home() {
  return (
    <>
      {/* <Box height="20px" width="20px" m={"10px"} bgcolor={colors.textRed} />
      <Box height="20px" width="20px" m={"10px"} bgcolor={colors.lightRed} />
      <Box height="20px" width="20px" m={"10px"} bgcolor={colors.darkenedRed} /> */}

      <Section headingText={"Welcome to our Club Website!"}>
        <ul
          style={{
            listStyleType: "square",
            paddingTop: "75px",
            paddingBottom: "75px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <img
              src={logoImage}
              style={{ height: "250px", paddingRight: "50px" }}
            />

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                paddingLeft: "50px",
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontFamily: "roboto",
                  color: colors.darkenedRed,
                  fontSize: "35px",
                  fontWeight: "900",
                  paddingBottom: "30px",
                }}
              >
                Latest News
              </Typography>
              <li
                style={{
                  fontSize: "24px",
                  fontFamily: "Roboto Condensed",
                  paddingLeft: "20px",
                }}
              >
                Check out our committee meeting times in the meetings tab!
              </li>
            </Box>
          </Box>
        </ul>
      </Section>

      <Section headingText={"Check out our Linktree!"}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: "50px",
          }}
        >
          <LinktreeBox width="300px" />
        </Box>
      </Section>
    </>
  );
}
