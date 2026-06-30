import {Typography} from "@mui/material";

type FeeResultProps = {
    feeValue: number;
};

const FeeResult = (props: FeeResultProps) => {
    const hasValue = props.feeValue > 0;
    return (
        <Typography variant="body2" align="right" color={hasValue ? 'error' : 'text.secondary'}>
            - {props.feeValue.toFixed(2)} €
        </Typography>
    );
};

export default FeeResult;
