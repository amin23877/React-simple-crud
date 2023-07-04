import { TextField } from "@mui/material";

export default function CustomTextField(props) {
    return (
        <TextField
            inputProps={{ style: { ...props.inputProps?.style } }}
            InputLabelProps={{ ...props.InputLabelProps }}
            variant="outlined"
            size="small"
            {...props}
        />
    );
}
