import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Form, Formik } from "formik";
import TextField from "../components/TextField";
import Toast from "../components/Toast";

function Student() {
  const handleSubmit = async (data) => {
    try {
      //   await postItem(data);
      Toast("Item created", "success");
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
          master: "",
          class_name: "",
          id: "",
          reason: "",
          attendance: "present",
        }}
        onSubmit={handleSubmit}
      >
        {({ getFieldProps, errors, touched, values }) => (
          <Form>
            <Box display="grid" gridTemplateColumns={"1fr"} gap={3}>
              <TextField
                label="Master"
                {...getFieldProps("master")}
                InputLabelProps={{ shrink: true }}
                error={Boolean(errors.master && touched.master)}
                helperText={errors.master}
              />
              <TextField
                label="Class Name"
                {...getFieldProps("class_name")}
                InputLabelProps={{ shrink: true }}
                error={Boolean(errors.class_name && touched.class_name)}
                helperText={errors.class_name}
              />
              <TextField
                label="Student ID"
                {...getFieldProps("id")}
                InputLabelProps={{ shrink: true }}
                error={Boolean(errors.id && touched.id)}
                helperText={errors.id}
              />
              <FormControl fullWidth>
                <InputLabel>Attendance</InputLabel>
                <Select label="Attendance" {...getFieldProps("attendance")}>
                  <MenuItem value={"absent"}>Absent</MenuItem>
                  <MenuItem value={"present"}>Present</MenuItem>
                  <MenuItem value={"excused absence"}>Excused Absence</MenuItem>
                </Select>
              </FormControl>
              {values.attendance === "excused absence" && (
                <TextField
                  label="Reason"
                  {...getFieldProps("reason")}
                  InputLabelProps={{ shrink: true }}
                  error={Boolean(errors.reason && touched.reason)}
                  helperText={errors.reason}
                  multiline
                  rows={4}
                />
              )}
              <Button color="success" type="submit" variant="contained">
                Save
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

export default Student;
