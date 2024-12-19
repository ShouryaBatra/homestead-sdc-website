import { Box, Typography } from "@mui/material";
import colors from "../../theme/colors";

export default function Tournaments() {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: 20,
              fontWeight: 700,
              fontFamily: "Roboto Condensed",
              padding: "10px",
              paddingTop: "20px",
            }}
          >
            Sign up for upcoming tournaments here!
          </Typography>

          <Typography
            sx={{
              fontFamily: "Roboto Condensed",
              color: colors.darkenedRed,
              display: "flex",
              flexDirection: "row",
              padding: "10px",
              fontSize: "19px",
            }}
          >
            REMINDER: All steps on the{" "}
            <i>
              <u>
                <a
                  href="https://docs.google.com/document/d/1QYjrK-zeM_lS1vL-vqxIQTz4etOmpI9Wt-wqK6_srjk/edit?tab=t.0"
                  style={{
                    color: "black",
                  }}
                >
                  {" "}
                  Competitor Checklist{" "}
                </a>
              </u>
            </i>
            MUST be completed in order to compete
          </Typography>
        </Box>

        <Box sx={{ paddingX: "100px", paddingBottom: "40px" }}>
          <Typography
            sx={{
              fontFamily: "Roboto Condensed",
              color: colors.darkenedRed,
              display: "flex",
              flexDirection: "row",
              padding: "10px",
              fontSize: "19px",
            }}
          >
            Upcoming tournaments
          </Typography>
          <Typography
            sx={{
              fontFamily: "Roboto Condensed",
              display: "flex",
              flexDirection: "row",
              padding: "10px",
              fontSize: "19px",
            }}
          >
            <a href="https://forms.gle/kfwMfaJuUFLZUZMA7">CFL Policy/LD</a>
          </Typography>
          <Typography
            sx={{
              fontFamily: "Roboto Condensed",
              display: "flex",
              flexDirection: "row",
              padding: "10px",
              fontSize: "19px",
            }}
          >
            <a href="https://forms.gle/7EYV49E922N5ZwoN6">CFL Parli/PF</a>
          </Typography>
          <Typography
            sx={{
              fontFamily: "Roboto Condensed",
              display: "flex",
              flexDirection: "row",
              padding: "10px",
              fontSize: "19px",
            }}
          >
            <a href="https://forms.gle/sGTikUthe3L4g1f57">John Lewis SVUDL</a>
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          backgroundColor: colors.lightRed,
          paddingX: "100px",
          fontFamily: "Roboto Condensed",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Box>
            <Typography sx={{ padding: "10px" }}>
              Fill out this Google Form to indicate interest:
            </Typography>
            <Typography sx={{ padding: "10px", fontWeight: "800" }}>
              BY:
            </Typography>
            <Typography sx={{ padding: "10px", fontWeight: "800" }}>
              THIS FORM IS BINDING.
            </Typography>
          </Box>

          <Box>
            <Typography
              sx={{
                padding: "10px",
                color: colors.darkenedRed,
                fontWeight: "800",
                fontSize: "22px",
              }}
            >
              [Tournament Name]
            </Typography>
            <Typography sx={{ padding: "10px" }}>Location:</Typography>
            <Typography sx={{ padding: "10px", fontWeight: "800" }}>
              Date:
            </Typography>
          </Box>
        </Box>

        <hr
          style={{
            backgroundColor: colors.lightRed,
            borderTop: `border-top: 3px solid #bbb`,
            margin: 0,
            display: "flex",
          }}
        />
      </Box>
    </>
  );
}
