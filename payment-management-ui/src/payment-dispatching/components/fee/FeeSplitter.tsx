import {Paper, Typography} from '@mui/material';
import AfterFeeDeductionsResultBox from "../confirmation/AfterFeeDeductionsResultBox.tsx";
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
        <Paper variant="outlined" sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>Fee Splitting</Typography>
            <Typography variant="subtitle1" gutterBottom>
                Split the payment amount between the following fees.
            </Typography>
            <FeeControl
                paymentAmount={props.paymentAmount}
                onPlatformFeeChange={props.onPlatformFeeChange}
                onProviderFeeChange={props.onProviderFeeChange}
                onLogisticsFeeChange={props.onLogisticsFeeChange}
            />
            <AfterFeeDeductionsResultBox remaining={props.remaining}/>
        </Paper>
    );
};

export default FeeSplitter;
