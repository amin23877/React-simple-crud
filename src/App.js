import { useEffect, useState } from "react";

import { Container, Typography, Button, Box, LinearProgress } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";

import { ItemTable } from "./features/Table";
import { getItems } from "./api";
import ItemModal from "./features/Modal";

function App() {
    const [rows, setRows] = useState();
    const [refresh, setRefresh] = useState(0);
    const [addItem, setAddItem] = useState(false);
    const [editItem, setEditItem] = useState(false);
    const [selectedItem, setSelectedItem] = useState();

    useEffect(() => {
        getItems().then((res) => {
            setRows(res);
        });
    }, [refresh]);

    return (
        <Container>
            <ItemModal open={addItem} onClose={() => setAddItem(false)} setRows={setRows} setRefresh={setRefresh} />
            {selectedItem && (
                <ItemModal
                    open={editItem}
                    onClose={() => setEditItem(false)}
                    data={selectedItem}
                    setRefresh={setRefresh}
                />
            )}
            <Typography variant="h3">Crud Sample</Typography>
            <Box mb={1}>
                <Button variant="contained" onClick={() => setAddItem(true)}>
                    {" "}
                    Add Item
                </Button>
            </Box>
            {rows ? (
                <ItemTable
                    rows={rows}
                    onRowSelected={(data) => {
                        setSelectedItem(data);
                        setEditItem(true);
                    }}
                />
            ) : (
                <LinearProgress />
            )}
        </Container>
    );
}

export default App;
