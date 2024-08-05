import { Box, Container, Pagination } from "@mui/material";
import { useState } from "react";
import RAppBar from "../components/RAppBar";
import jobs from "../jobs.json";
import JobPage from "../components/JobPage";
import { Routes } from "react-router-dom";

export default function HomePage() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <Box minWidth={"sm"} width={"100%"} height={"100%"}>
        <Routes></Routes>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <JobPage jobs={jobs} currentPage={currentPage}></JobPage>
        </Container>
        <Pagination
          count={3}
          page={currentPage}
          onChange={(event, page) => setCurrentPage(page)}
          color="primary"
          sx={{ display: "flex", justifyContent: "center" }}
        />
      </Box>
    </>
  );
}
