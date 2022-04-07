import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Login() {
  const [user, setUser] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <h4>Login</h4>
        <TextField required id="outlined-required" label="Email" />
        <br />
        <TextField
          required
          id="outlined-password-input"
          label="Password"
          type="password"
        />
        <br />

        <Button variant="outlined">Login</Button>
      </div>
    </Box>
  );
}
