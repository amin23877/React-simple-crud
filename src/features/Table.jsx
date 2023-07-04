import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export const ItemTable = ({ rows, onRowSelected }) => {
    const columns = [
        {
            id: "rating",
            label: "Rate",
            minWidth: 50,
            format: (value) => (
                <div
                    style={{
                        color:
                            value.rate > 4 ? "green" : value.rate > 3 ? "#5dbb63" : value.rate > 2 ? "orange" : "red",
                    }}
                >
                    {value.rate}
                </div>
            ),
        },
        { id: "title", label: "Title", minWidth: 170 },
        { id: "price", label: "Price", minWidth: 170, align: "center", format: (value) => value + " $" },
        { id: "category", label: "Category", minWidth: 170 },
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
                        {rows.map((row) => {
                            return (
                                <TableRow
                                    hover
                                    role="checkbox"
                                    tabIndex={-1}
                                    key={row.code}
                                    sx={{ cursor: "pointer" }}
                                    onClick={() => {
                                        onRowSelected(row);
                                    }}
                                >
                                    {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align}>
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
