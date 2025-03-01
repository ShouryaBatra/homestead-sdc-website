import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import logoBanner from "../assets/images/logoBanner.jpeg";
import colors from "../theme/colors";
import { getTab } from "../assets/content";

export default function LinktreeBox({ width }) {
  const home = getTab("home");
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
            {home.getBlock("cardTitle")}
          </Typography>
          <Typography variant="body2" sx={{}}>
            {home.getBlock("cardSubtitle")}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
