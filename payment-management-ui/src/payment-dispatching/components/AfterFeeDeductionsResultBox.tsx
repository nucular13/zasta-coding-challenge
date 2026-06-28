import {Box, Typography} from "@mui/material";

type AfterFeeDeductionsResultBoxProps = {
    remaining: number
};

const AfterFeeDeductionsResultBox = (props: AfterFeeDeductionsResultBoxProps) => {
    const isOverspent = props.remaining < 0
    return (
        <Box sx={{ bgcolor: isOverspent ? 'error.light' : 'success.light', p: 2, borderRadius: 1 }}>
            <Typography variant="h6">
                The merchant receives: {props.remaining.toFixed(2)} €
            </Typography>
            {isOverspent && (
                <Typography variant="body2" color="error.dark">
                    Warning: Fees exceed the payment amount
                </Typography>
            )}
        </Box>
    );
};

export default AfterFeeDeductionsResultBox;
