import { Box } from "@mui/material";
import Section from "../../components/Section";

export default function Calendar() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "100px",
      }}
    >
      <iframe
        src="https://calendar.google.com/calendar/embed?src=c_classroom2e797144%40group.calendar.google.com&ctz=America%2FLos_Angeles"
        style={{
          width: "1000px",
          height: "1000px",
        }}
      />
    </Box>
  );
}
