import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function LoginModal({ setUser }) {
  const defaultValues = {
    username: "hien123",
    password: "123hien",
  };
  const [openLogin, setOpenLogin] = useState(true);
  const methods = useForm({ defaultValues });
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = (data) => {
    if (
      data.username === defaultValues.username &&
      data.password === defaultValues.password
    ) {
      setUser({ username: data.username, password: data.password });
      navigate("/");
    } else {
      console.log("Invalid credentials");
    }
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

  return (
    <>
      <Modal
        open={openLogin}
        onClose={() => {
          setOpenLogin(!openLogin);
          navigate("/");
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography>Log In</Typography>
          <TextField
            id="filled-basic"
            label="username"
            variant="outlined"
            {...register("username", { required: true })}
          />
          {errors.username && <div>This field is required</div>}
          <TextField
            id="filled-basic"
            label="password"
            variant="outlined"
            {...register("password", { required: true })}
          />
          {errors.password && <div>This field is required</div>}
          <Button
            type="submit"
            variant="contained"
            onClick={handleSubmit(onSubmit)}
          >
            Log In
          </Button>
        </Box>
      </Modal>
    </>
  );
}
