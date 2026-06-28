import {Card, CardContent, Stack, Typography} from '@mui/material'
import FeeInputField from './FeeInputField.tsx'
import AfterFeeDeductionsResultBox from "./AfterFeeDeductionsResultBox.tsx";

type FeeSplitterProps = {
    platformFee: number;
    providerFee: number;
    logisticsFee: number;
    remaining: number;
    onPlatformFeeChange: (value: number) => void;
    onProviderFeeChange: (value: number) => void;
    onLogisticsFeeChange: (value: number) => void;
};

const FeeSplitter = (props: FeeSplitterProps) => {

    return (
        <Card variant="outlined">
            <CardContent>
                <Typography variant="h6" gutterBottom>Fee Splitting</Typography>
                <Stack spacing={2}>
                    <FeeInputField 
                        label="Platform Fee (€)" 
                        value={props.platformFee}
                        onChange={props.onPlatformFeeChange} 
                    />
                    <FeeInputField 
                        label="Payment Provider Fee (€)" 
                        value={props.providerFee}
                        onChange={props.onProviderFeeChange} 
                    />
                    <FeeInputField 
                        label="Logistics Fee (€)" 
                        value={props.logisticsFee}
                        onChange={props.onLogisticsFeeChange} 
                    />
                    <AfterFeeDeductionsResultBox remaining={props.remaining} />
                </Stack>
            </CardContent>
        </Card>
    );
};

export default FeeSplitter;
