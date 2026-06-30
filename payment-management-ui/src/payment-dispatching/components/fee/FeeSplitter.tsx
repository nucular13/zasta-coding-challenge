import {CardContent, Paper, Stack, Typography} from '@mui/material';
import AfterFeeDeductionsResult from "../confirmation/AfterFeeDeductionsResult.tsx";
import FeeControl from "./FeeControl.tsx";

type FeeSplitterProps = {
    remaining: number;
    paymentAmount: number;
    onPlatformFeeChange: (value: number) => void;
    onProviderFeeChange: (value: number) => void;
    onLogisticsFeeChange: (value: number) => void;
};

const FeeSplitter = (props: FeeSplitterProps) => {
    return (
        <Paper variant="outlined">
            <CardContent>
                <Typography variant="h6" gutterBottom>Fee Splitting</Typography>
                <Typography variant="subtitle1" gutterBottom>
                    Split the payment amount between the following fees.
                </Typography>
                <Stack spacing={2}>
                    <FeeControl
                        paymentAmount={props.paymentAmount}
                        onPlatformFeeChange={props.onPlatformFeeChange}
                        onProviderFeeChange={props.onProviderFeeChange}
                        onLogisticsFeeChange={props.onLogisticsFeeChange}
                    />
                    <AfterFeeDeductionsResult remaining={props.remaining}/>
                </Stack>
            </CardContent>
        </Paper>
    );
};

export default FeeSplitter;
