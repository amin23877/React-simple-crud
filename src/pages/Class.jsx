import { useEffect, useState } from "react";

import {
  Container,
  Typography,
  Button,
  Box,
  LinearProgress,
} from "@mui/material";
import "react-toastify/dist/ReactToastify.css";

import { ClassTable } from "../features/ClassTable";
import { getClasses } from "../api";
import ClassModal from "../features/Modal";

function ClassCrud() {
  const [classes, setClasses] = useState();
  const [addItem, setAddItem] = useState(false);
  const [refresh, setRefresh] = useState(1);

  useEffect(() => {
    getClasses().then((res) => {
      setClasses(res);
    });
  }, [refresh]);

  return (
    <Container>
      {addItem && (
        <ClassModal
          onClose={() => {
            setAddItem(false);
          }}
          open={addItem}
          setRefresh={setRefresh}
        />
      )}
      <Typography variant="h3">Classes List</Typography>
      <Box mb={1}>
        <Button variant="contained" onClick={() => setAddItem(true)}>
          Add Class By CSV
        </Button>
      </Box>
      {classes ? <ClassTable rows={classes} /> : <LinearProgress />}
    </Container>
  );
}

export default ClassCrud;
