import { useEffect, useState } from "react";

import { Container, Typography, LinearProgress } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";

import { UserTable } from "../features/UserTable";
import { getClassStudents } from "../api";
import { useParams } from "react-router-dom";

function ClassDetails() {
  const { classId } = useParams();

  const [students, setStudents] = useState();
  //   const [addItem, setAddItem] = useState(false);

  useEffect(() => {
    getClassStudents(classId).then((res) => {
      setStudents(res);
    });
  }, [classId]);

  return (
    <Container>
      <Typography variant="h3">students List</Typography>
      {/* <Box mb={1}>
        <Button variant="contained" onClick={() => setAddItem(true)}>
          Add Class By CSV
        </Button>
      </Box> */}
      {students ? <UserTable rows={students} /> : <LinearProgress />}
    </Container>
  );
}

export default ClassDetails;
