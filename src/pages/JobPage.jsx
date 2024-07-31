import { Grid } from "@mui/material";
import JobCard from "../components/JobCard";

const JobsPage = ({ jobs, currentPage }) => {
  return (
    <>
      {" "}
      <Grid container spacing={5} sx={{ margin: "0px" }}>
        {jobs.slice((currentPage - 1) * 5, currentPage * 5).map((job) => (
          <Grid key={job.id} item xs={12} md={4}>
            <JobCard jobs={job}></JobCard>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default JobsPage;
