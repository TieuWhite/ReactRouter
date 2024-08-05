import { Grid } from "@mui/material";
import JobCard from "./JobCard";

export default function JobPage({ jobs, currentPage }) {
  return (
    <>
      {" "}
      <Grid container spacing={3}>
        {jobs
          .slice((currentPage - 1) * 5, currentPage * 5)
          .map((job, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <JobCard job={job} />
            </Grid>
          ))}
      </Grid>
    </>
  );
}
