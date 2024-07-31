import ResponsiveAppBar from "./components/ResponsiveAppBar";
import "./App.css";
import { Container, Grid, Pagination } from "@mui/material";
import { useState } from "react";
import JobsPage from "./pages/JobPage";
import jobs from "./jobs.json";

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <ResponsiveAppBar />
      <Container maxWidth={"1140px"} margin={"auto"}>
        <Grid container spacing={0}>
          <JobsPage jobs={jobs} currentPage={currentPage} />
          <Grid item xs={12} display="flex" justifyContent="center">
            <Pagination
              sx={{
                "& .MuiPaginationItem-root": {
                  color: "white",
                },
              }}
              count={3}
              page={currentPage}
              onChange={(e, page) => setCurrentPage(page)}
              variant="outlined"
              shape="rounded"
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
