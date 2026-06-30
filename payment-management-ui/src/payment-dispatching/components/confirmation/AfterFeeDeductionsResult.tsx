import {Alert, AlertTitle} from "@mui/material";

type AfterFeeDeductionsResultProps = {
    remaining: number;
};

const AfterFeeDeductionsResult = (props: AfterFeeDeductionsResultProps) => {
    const isOverspent = props.remaining < 0;
    return (
        <Alert severity={isOverspent ? 'error' : 'success'}>
            <AlertTitle>The merchant receives: {props.remaining.toFixed(2)} €</AlertTitle>
            {isOverspent && 'Warning: Fees exceed the payment amount!'}
        </Alert>
    );
};

export default AfterFeeDeductionsResult;
