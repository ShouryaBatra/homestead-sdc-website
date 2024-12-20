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
            <Typography
              sx={{
                paddingY: "10px",
                fontFamily: "Roboto Condensed",
                fontWeight: "700",
                fontSize: "19px",
              }}
            >
              Form to link your tabroom account:
            </Typography>

            <Box sx={{ paddingY: "10px" }}>
              <Typography
                sx={{
                  fontFamily: "Roboto Condensed",
                  fontWeight: "700",
                  fontSize: "19px",
                }}
              >
                Submit your monster packet:
              </Typography>
              <ul
                style={{
                  listStyleType: "square",
                }}
              >
                <li>
                  <Typography
                    sx={{ fontFamily: "Roboto Condensed", fontSize: "17px" }}
                  >
                    Upload as a PDF to:{" "}
                  </Typography>
                </li>
              </ul>
            </Box>

            <Typography
              sx={{
                paddingY: "10px",
                fontFamily: "Roboto Condensed",
                fontWeight: "700",
                fontSize: "19px",
              }}
            >
              NSDA Membership (after paying):
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Typography sx={{ fontSize: "24px" }}>MONSTER PACKETS:</Typography>
            <Typography sx={{ fontSize: "24px" }}>
              Competitor Checklist:{" "}
              <a
                href="https://docs.google.com/document/d/1QYjrK-zeM_lS1vL-vqxIQTz4etOmpI9Wt-wqK6_srjk/edit?tab=t.0"
                style={{ color: "black" }}
              >
                link
              </a>
            </Typography>
          </Box>
        </Box>
      </Section>

      {/* <Section headingText={"For Parents"}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            paddingX: "150px",
            paddingY: "30px",
          }}
        >
          <Box>
            <Typography
              sx={{
                paddingY: "10px",
                fontFamily: "Roboto Condensed",
                fontWeight: "700",
                fontSize: "19px",
              }}
            >
              Form to link your tabroom account:
            </Typography>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Typography>JUDGE TRAINING SLIDES: link</Typography>
            <Box>
              <Typography>Parent Meeting Slides:</Typography>
              <Typography>Parent Meeting Video:</Typography>
            </Box>
          </Box>
        </Box>
      </Section> */}

      <Section headingText={"For Parents"}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            paddingX: "150px",
            paddingY: "50px",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              sx={{
                paddingBottom: "30px",
                fontFamily: "Roboto Condensed",
                fontWeight: "700",
                fontSize: "19px",
              }}
            >
              Form to link your tabroom account:
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Typography sx={{ fontSize: "24px" }}>
              JUDGE TRAINING SLIDES:{" "}
              <a
                href="https://docs.google.com/document/d/1QYjrK-zeM_lS1vL-vqxIQTz4etOmpI9Wt-wqK6_srjk/edit?tab=t.0"
                style={{ color: "black" }}
              >
                link
              </a>
            </Typography>

            <Box>
              <Typography sx={{ fontSize: "24px" }}>
                Parent Meeting Slides:
              </Typography>

              <Typography sx={{ fontSize: "24px", paddingTop: "10px" }}>
                Parent Meeting Video:
              </Typography>
            </Box>
          </Box>
        </Box>
      </Section>
    </>
  );
}
