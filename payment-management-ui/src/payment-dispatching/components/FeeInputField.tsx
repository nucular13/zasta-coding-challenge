import {TextField} from "@mui/material";

type FeeInputFieldProps = {
    label: string;
    value: number;
    onChange: (value: number) => void;
};

const FeeInputField = (props: FeeInputFieldProps) => {
    return (
        <TextField
            label={props.label}
            type="number"
            value={props.value}
            onChange={(e) => props.onChange(Number(e.target.value))}
            slotProps={{ htmlInput: { min: 0, step: 0.01 } }}
        />
    );
};

export default FeeInputField;
