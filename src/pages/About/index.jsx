import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from "@mui/material";
import colors from "../../theme/colors";
import { aboutImages } from "../../constants/aboutImages";

export default function About() {
  const adminOfficers = Object.values(aboutImages.adminOfficers);
  const speechCommitteeLeaders = Object.values(
    aboutImages.speechCommitteeLeaders
  );
  const debateCommitteeLeaders = Object.values(
    aboutImages.debateCommitteeLeaders
  );

  return (
    <>
      <Box sx={{ display: "flex", justifyItems: "center", padding: "150px" }}>
        <Typography
          sx={{
            fontSize: "20px",
            fontFamily: "Roboto Condensed",
            textAlign: "center",
            margin: "20px, 0",
            lineHeight: "50px",
          }}
        >
          Speech and Debate Club (SDC) is a student-run club that develops
          skills in public speaking and debate and forms a community of students
          who share similar interests. The club raises awareness of worldwide
          topics and represents Homestead in tournaments against other schools.
          We welcome students of all levels of experience as our officers will
          guide them towards improving their skills and preparing for
          tournaments.
        </Typography>
      </Box>

      {/* <Box
        sx={{
          backgroundColor: colors.darkenedRed,
          display: "flex",
          alignContent: "center",
        }}
      >
        <Typography >Meet the Team</Typography>
        <Box>
          <ImageList sx={{ width: 500, height: 450 }}>
            {adminOfficers.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  alt={item.name}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={item.name}
                  subtitle={<span>{item.position}</span>}
                  position="below"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Box> */}

      <Box
        sx={{
          backgroundColor: colors.darkenedRed, // Darkened red
          minHeight: "100vh",
          padding: "2rem",
        }}
      >
        {/* Title */}
        <Typography
          variant="h4"
          component="h2"
          align="center"
          gutterBottom
          sx={{
            color: "white",
            fontWeight: "bold",
            marginBottom: "2rem",
          }}
        >
          Meet the Team
        </Typography>

        {/* Admin Officers */}
        <Box sx={{ textAlign: "center", marginBottom: "2rem" }}>
          <Typography
            variant="h6"
            sx={{ color: "white", fontWeight: "bold", marginBottom: "1rem" }}
          >
            Admin Officers:
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {adminOfficers.map((officer) => (
              <Grid item key={officer.name} xs={12} sm={6} md={4} lg={2}>
                <Card
                  sx={{
                    backgroundColor: "#fff",
                    borderRadius: "8px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={officer.img}
                    alt={officer.name}
                    sx={{
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                  <CardContent>
                    <Typography
                      variant="subtitle1"
                      align="center"
                      sx={{ fontWeight: "bold" }}
                    >
                      {officer.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      align="center"
                      color="text.secondary"
                    >
                      {officer.position}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Speech Committee Leaders */}
        <Box sx={{ textAlign: "center", marginBottom: "2rem" }}>
          <Typography
            variant="h6"
            sx={{ color: "white", fontWeight: "bold", marginBottom: "1rem" }}
          >
            Speech Committee Leaders
          </Typography>

          {/* Officers Grid */}
          <Grid container spacing={4} justifyContent="center">
            {speechCommitteeLeaders.map((officer) => (
              <Grid item key={officer.name} xs={12} sm={6} md={4} lg={2}>
                <Card
                  sx={{
                    backgroundColor: "#fff",
                    borderRadius: "8px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={officer.img}
                    alt={officer.name}
                    sx={{
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                  <CardContent>
                    <Typography
                      variant="subtitle1"
                      align="center"
                      sx={{ fontWeight: "bold" }}
                    >
                      {officer.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      align="center"
                      color="text.secondary"
                    >
                      {officer.position}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Debate Committee Leaders */}
        <Box sx={{ textAlign: "center", marginBottom: "2rem" }}>
          <Typography
            variant="h6"
            sx={{ color: "white", fontWeight: "bold", marginBottom: "1rem" }}
          >
            Debate Committee Leaders
          </Typography>

          {/* Officers Grid */}
          <Grid container spacing={4} justifyContent="center">
            {debateCommitteeLeaders.map((officer) => (
              <Grid item key={officer.name} xs={12} sm={6} md={4} lg={2}>
                <Card
                  sx={{
                    backgroundColor: "#fff",
                    borderRadius: "8px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={officer.img}
                    alt={officer.name}
                    sx={{
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                  <CardContent>
                    <Typography
                      variant="subtitle1"
                      align="center"
                      sx={{ fontWeight: "bold" }}
                    >
                      {officer.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      align="center"
                      color="text.secondary"
                    >
                      {officer.position}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
}
