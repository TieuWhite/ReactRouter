import { useParams, useNavigate } from "react-router-dom";
import jobs from "../jobs.json";
import { Box, Chip, Divider, Modal } from "@mui/material";
import { useState } from "react";

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
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  boxShadow: 24,
  p: 5,
  backgroundColor: "#383838",
  display: "flex",
  flexDirection: "column",
  gap: 2,
  color: "white",
};

export default function JobModal() {
  const { id } = useParams();
  const [openJob, setOpenJob] = useState(true);

  const foundJob = jobs.find((job) => id === job.id);
  const navigate = useNavigate();

  return (
    <>
      <Modal
        open={openJob}
        onClose={() => {
          setOpenJob(!openJob);
          navigate("/");
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {foundJob.title}
          <Divider variant="middle" sx={styleDivider}></Divider>
          <Box>
            {foundJob.skills.slice(0, 4).map((skill) => (
              <Chip sx={styleChip} key={skill} label={skill} />
            ))}
          </Box>
          {foundJob.description}
        </Box>
      </Modal>
    </>
  );
}
