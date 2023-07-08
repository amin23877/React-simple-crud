import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";

export const ClassTable = ({ rows }) => {
  const navigate = useNavigate();
  return (
    <Paper>
      <TableContainer sx={{ maxHeight: "calc(100vh - 140px)" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ background: "#000020", color: "white" }}>
                Class Name
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={row}
                  sx={{ cursor: "pointer" }}
                  onClick={() => {
                    navigate(`/masters/${row}`);
                  }}
                >
                  <TableCell>{row}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
