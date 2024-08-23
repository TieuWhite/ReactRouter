import * as React from "react";
import Box from "@mui/material/Box";
import { Button, Chip, Divider } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const styleDivider = {
  py: 0,
  width: "100%",
  maxWidth: 360,
  borderRadius: 2,
  border: "1px solid",
  borderColor: "divider",
  backgroundColor: "background.paper",
};

const styleChip = {
  fontSize: "0.6125rem",
  height: "12px",
  color: "white",
  backgroundColor: "rgb(215, 71, 66)",
};

const style = {
  height: 200,
  my: 4,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 1,
  p: 2,
  backgroundColor: "#383838",
  color: "white",
  borderRadius: "15px",
};

export default function JobCard({ job, user }) {
  const location = useLocation();
  return (
    <>
      <Box sx={style}>
        {job.title}
        <Divider variant="middle" sx={styleDivider}></Divider>
        <Box>
          {job.skills.slice(0, 4).map((skill) => (
            <Chip sx={styleChip} key={skill} label={skill} />
          ))}
        </Box>
        {job.description}
        <Link
          to={user ? `/jobs/${job.id}` : `/login`}
          state={{ backgroundLocation: location }}
        >
          <Button variant="contained" sx={{ bgcolor: "#FFA726" }}>
            Learn More
          </Button>
        </Link>
      </Box>
    </>
  );
}
