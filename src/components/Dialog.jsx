import React from "react";
import { Dialog, DialogTitle, Box, IconButton } from "@mui/material";

export default function Modal({ closeOnClickOut, open, title, onClose, ...props }) {
    return (
        <Dialog open={open} onClose={closeOnClickOut === undefined || closeOnClickOut ? onClose : () => {}} {...props}>
            <Box
                style={{ backgroundColor: "#ededed" }}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                px={1}
            >
                <DialogTitle>{title}</DialogTitle>
                <div style={{ flexGrow: 1 }} />
                <IconButton onClick={onClose}>&#x274C;</IconButton>
            </Box>
            <Box m={1} height="100%">
                {props.children}
            </Box>
        </Dialog>
    );
}
