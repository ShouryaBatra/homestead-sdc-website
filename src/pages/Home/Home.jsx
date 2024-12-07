import { Button, Box } from "@mui/material";
import Header from "../../components/Header";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Box
        height={"100px"}
        width={"100px"}
        bgcolor={"red"}
        sx={{
          display: {
            xs: "none",
            sm: "block",
            md: "block",
            lg: "block",
            xl: "block",
          },
        }}
      />
      <Header />
    </>
  );
}
