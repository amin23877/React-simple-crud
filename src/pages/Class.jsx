import { useEffect, useState } from "react";

import {
  Container,
  Typography,
  Button,
  Box,
  LinearProgress,
} from "@mui/material";
import "react-toastify/dist/ReactToastify.css";

import { ItemTable } from "../features/Table";
import { getClasses } from "../api";

function ClassCrud() {
  const [classes, setClasses] = useState();
  const [addItem, setAddItem] = useState(false);
  const [selectedClasses, setSelectedClasses] = useState();

  useEffect(() => {
    getClasses().then((res) => {
      setClasses(res);
    });
  }, []);

  return (
    <Container>
      <Typography variant="h3">Classes List</Typography>
      <Box mb={1}>
        <Button variant="contained" onClick={() => setAddItem(true)}>
          Add Class By CSV
        </Button>
      </Box>
      {classes ? (
        <ItemTable
          rows={classes}
          onRowSelected={(data) => {
            setSelectedClasses(data);
          }}
        />
      ) : (
        <LinearProgress />
      )}
    </Container>
  );
}

export default ClassCrud;
