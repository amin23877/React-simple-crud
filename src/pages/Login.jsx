import { Box, Button, Link } from "@mui/material";
import { Form, Formik } from "formik";
import TextField from "../components/TextField";
import { useState } from "react";
import { login, signUp } from "../api";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [signIn, setSignIn] = useState(false);

  const handleSubmit = async (data) => {
    try {
      if (signIn) {
        await signUp(data);
      } else {
        const resp = await login(data);
        localStorage.setItem("token", resp.access_token);
        localStorage.setItem("username", data.username);
      }
      navigate("/masters");
    } catch (error) {
      console.log(error);
    } finally {
    }
  };
  return (
    <Box
      height={"100vh"}
      width={"max-content"}
      display={"flex"}
      alignItems="center"
      justifyContent="center"
      gap="20px"
      mx={"auto"}
    >
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        {({ getFieldProps, errors, touched }) => (
          <Form>
            <Box display="grid" gridTemplateColumns={"1fr"} gap={3}>
              <h3>{signIn ? "Sign Up" : "Login"}</h3>

              <TextField
                label="Username"
                {...getFieldProps("username")}
                InputLabelProps={{ shrink: true }}
                error={Boolean(errors.username && touched.username)}
                helperText={errors.username}
              />
              <TextField
                label="Password"
                {...getFieldProps("password")}
                InputLabelProps={{ shrink: true }}
                error={Boolean(errors.password && touched.password)}
                helperText={errors.password}
                type="password"
              />

              <Button color="success" type="submit" variant="contained">
                Save
              </Button>

              <Link
                sx={{ cursor: "pointer" }}
                onClick={() => {
                  setSignIn((p) => !p);
                }}
              >
                {!signIn ? "Sign Up >" : "Login >"}
              </Link>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

export default Login;
