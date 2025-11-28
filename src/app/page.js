import Image from "next/image";
import Header from "./components/Header/page";
import { Container, Box, Grid } from "@mui/material";

export default function Home() {
  return (
    <div>
      <Header />
      <Grid container maxWidth="lg" sx={{ padding: "20px 0" }}>
        <Grid item size={8} xs={12} sm={6} sx={{ textAlign: "center" }}>
          <h1>Hi, I'm Anisa</h1>
        </Grid>
        <Grid item size={4}>image</Grid>
      </Grid>
    </div>
  );
}
