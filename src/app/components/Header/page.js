import React from "react";
import { Container, Typography } from "@mui/material";

export default function Header() {
  return (
    <Container maxWidth="lg" sx={{ padding: "20px 0", boxShadow: 2,}}>
      <Typography variant="h4" component="h1" >
        AT
      </Typography>
    </Container>
  );
}
