import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import logoBanner from "../assets/images/logoBanner.jpeg";
import colors from "../theme/colors";

export default function LinktreeBox({ width }) {
  return (
    <Card sx={{ maxWidth: width }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={logoBanner}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              fontFamily: "Roboto",
              color: colors.darkenedRed,
              fontWeight: 700,
              fontSize: "13pt",
            }}
          >
            Homestead Speech & Debate | Instagram | Linktree
          </Typography>
          <Typography variant="body2" sx={{}}>
            Check out our links! 🌟
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
