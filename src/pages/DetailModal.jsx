import { Box, Chip, Modal, Typography } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";
import job from "../jobs.json";

export default function DetailModel() {
  const [open, setOpen] = useState(false);
  const handleModal = () => {
    setOpen(!open);
  };

  const { id } = useParams();

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    backgroundColor: "#383838",
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {job.title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {job.description}
          </Typography>
          <Box mt={2}>
            <Typography variant="subtitle1">Skills:</Typography>
            {job.skills.map((skill) => (
              <Chip key={skill} label={skill} sx={{ mr: 1 }} />
            ))}
          </Box>
        </Box>
      </Modal>
    </>
  );
}
