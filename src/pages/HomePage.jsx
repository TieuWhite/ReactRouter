import { Box, Container, Grid, Pagination } from "@mui/material";
import JobCard from "../components/JobCard";

export default function HomePage({ currentPage, setCurrentPage, jobs }) {
  return (
    <>
      <Box minWidth={"sm"} width={"100%"} height={"100%"}>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Grid container spacing={3}>
            {jobs.slice((currentPage - 1) * 5, currentPage * 5).map((job) => (
              <Grid item xs={12} sm={6} md={4} key={job.id}>
                <JobCard job={job} />
              </Grid>
            ))}
          </Grid>
        </Container>
        <Pagination
          count={3}
          page={currentPage}
          onChange={(page) => setCurrentPage(page)}
          color="primary"
          sx={{ display: "flex", justifyContent: "center" }}
        />
      </Box>
    </>
  );
}
