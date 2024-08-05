import { Box, Modal, TextField } from "@mui/material";
import { useState } from "react";

export default function LoginModal() {
  const [open, setOpen] = useState(false);
  const handleModal = () => {
    setOpen(!open);
  };

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
          <TextField id="filled-basic" label="Filled" variant="filled" />
          <TextField id="filled-basic" label="Filled" variant="filled" />
        </Box>
      </Modal>
    </>
  );
}
