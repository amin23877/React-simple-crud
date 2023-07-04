import { Box, Button } from "@mui/material";
import { Form, Formik } from "formik";
import { deleteItem, postItem, putItem, schema } from "../api";
import Confirm from "../components/Confirm";
import Modal from "../components/Dialog";
import TextField from "../components/TextField";
import Toast from "../components/Toast";

export default function ItemModal({ onClose, open, data, setRefresh }) {
    const handleSubmit = async (data) => {
        try {
            if (data && data.id) {
                await putItem(data.id, data);
                Toast("Item updated", "success");
            } else {
                await postItem(data);
                Toast("Item created", "success");
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
        <Modal open={open} onClose={onClose} title={data ? "Edit Item" : "Add Item "} fullWidth maxWidth="sm">
            <Formik
                initialValues={data ? data : { title: "", category: "", price: "" }}
                validationSchema={schema}
                onSubmit={handleSubmit}
            >
                {({ getFieldProps, errors, touched }) => (
                    <Form>
                        <Box display="grid" gridTemplateColumns={"1fr"} gap={2}>
                            <TextField
                                label="Title"
                                {...getFieldProps("title")}
                                InputLabelProps={{ shrink: true }}
                                error={Boolean(errors.title && touched.title)}
                                helperText={errors.title}
                            />
                            <TextField
                                label="Price"
                                {...getFieldProps("price")}
                                InputLabelProps={{ shrink: true }}
                                error={Boolean(errors.price && touched.price)}
                                helperText={errors.price}
                            />
                            <TextField
                                label="Category"
                                {...getFieldProps("category")}
                                InputLabelProps={{ shrink: true }}
                                error={Boolean(errors.category && touched.category)}
                                helperText={errors.category}
                            />
                            <Box display="flex" alignItems="center" gap={3} justifyContent="center">
                                <Button color="success" type="submit" variant="contained">
                                    Save
                                </Button>
                                {data && data.id && (
                                    <Button color="error" onClick={handleDelete} variant="contained">
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
