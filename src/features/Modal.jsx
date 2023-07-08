import { Box, Button } from "@mui/material";
import { Form, Formik } from "formik";
import { addClassByCsv, deleteItem, putItem, schema } from "../api";
import Confirm from "../components/Confirm";
import Modal from "../components/Dialog";
import TextField from "../components/TextField";
import Toast from "../components/Toast";

export default function ClassModal({ onClose, open, data, setRefresh }) {
  const handleSubmit = async (data) => {
    try {
      if (data && data.id) {
        await putItem(data.id, data);
        Toast("Item updated", "success");
      } else {
        await addClassByCsv(data);
        Toast("Class created", "success");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setRefresh((prev) => prev + 1);
      onClose();
    }
  };

  const handleDelete = () => {
    onClose();
    Confirm({
      text: `you are going to delete an Item with Title :  ${data.title} !`,
      onConfirm: async () => {
        try {
          if (data && data.id) {
            await deleteItem(data.id);
            Toast("Item deleted", "success");
          }
        } catch (error) {
          console.log(error);
        } finally {
          setRefresh((prev) => prev + 1);
        }
      },
    });
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={data ? "Edit Item" : "Add Item "}
      fullWidth
      maxWidth="sm"
    >
      <Formik
        initialValues={
          data ? data : { master: "", class_name: "", csv_file: "" }
        }
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ getFieldProps, errors, touched, setFieldValue }) => (
          <Form>
            <Box display="grid" gridTemplateColumns={"1fr"} gap={2}>
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
              <input
                required
                name="csv_file"
                type="file"
                onChange={(event) => {
                  setFieldValue("csv_file", event.currentTarget.files[0]);
                }}
                accept=".csv"
              />
              <Box
                display="flex"
                alignItems="center"
                gap={3}
                justifyContent="center"
              >
                <Button color="success" type="submit" variant="contained">
                  Save
                </Button>
                {data && data.id && (
                  <Button
                    color="error"
                    onClick={handleDelete}
                    variant="contained"
                  >
                    Delete
                  </Button>
                )}
              </Box>
            </Box>
          </Form>
        )}
      </Formik>
    </Modal>
  );
}
