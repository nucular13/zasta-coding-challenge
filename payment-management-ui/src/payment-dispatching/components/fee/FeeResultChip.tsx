import {Chip} from "@mui/material";

type FeeResultChipProps = {
    feeValue: number;
};

const FeeResultChip = (props: FeeResultChipProps) => {
    const hasValue = props.feeValue > 0;
    return (
        <Chip
            label={`- ${props.feeValue.toFixed(2)} €`}
            color={hasValue ? 'error' : 'default'}
            variant="outlined"
        />
    );
};

export default FeeResultChip;
