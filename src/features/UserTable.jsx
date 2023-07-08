import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export const UserTable = ({ rows, onRowSelected }) => {
  const columns = [
    { id: "id", label: "ID", minWidth: 170 },
    {
      id: "name",
      label: "Name",
      minWidth: 170,
    },
    {
      id: "attendance",
      label: "Attendance",
      minWidth: 150,
      format: (value) => (
        <div
          style={{
            color:
              value === "present"
                ? "green"
                : value === "absent"
                ? "red"
                : "#5dbb63",
          }}
        >
          {value}
        </div>
      ),
    },
  ];

  return (
    <Paper>
      <TableContainer sx={{ maxHeight: "calc(100vh - 140px)" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  sx={{ background: "#000020", color: "white" }}
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => {
              return (
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={index}
                  sx={{ cursor: "pointer" }}
                  onClick={() => {}}
                >
                  {columns.map((column, index) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={index} align={column.align}>
                        {column.format ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
