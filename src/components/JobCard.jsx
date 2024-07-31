import * as React from "react";
import { Box, Button, Chip, Container, Divider } from "@mui/material";

const styleDivider = {
  py: 0,
  width: "100%",
  maxWidth: 360,
  borderRadius: 2,
  border: "1px solid",
  borderColor: "divider",
  backgroundColor: "background.paper",
  alignItems: "center",
};

const styleChip = {
  backgroundColor: "rgb(215, 71, 66)",
  color: "white",
  fontSize: "5px",
  height: "10px",
  paddingRight: "1px",
  paddingLeft: "1px",
};

const styleBox = {
  fontSize: "10px",
  borderRadius: "5px",
  backgroundColor: "#383838",
  color: "white",
  height: "100%",
  width: "200px",
  my: "4px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  p: "2px",
  gap: "10px",
  padding: "15px",
};

const styleButton = {
  backgroundColor: "rgb(255, 167, 38)",
  fontSize: "10px",
  color: "black",
};

export default function JobCard({ jobs }) {
  return (
    <>
      <Container
        sx={{
          "@media screen and (max-width: 400px)": {
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        <Box sx={styleBox}>
          {jobs.title}
          <Divider variant="middle" sx={styleDivider}></Divider>
          <Box>
            {jobs.skills.slice(0, 4).map((skill) => (
              <Chip key={skill} label={skill} sx={styleChip} />
            ))}
          </Box>
          <Box fontSize={"10px"}>{jobs.description}</Box>
          <Button variant="contained" sx={styleButton}>
            Learn More
          </Button>
        </Box>
      </Container>
    </>
  );
}
