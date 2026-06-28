import {Box, Card, CardContent, Stack, TextField, Typography} from '@mui/material'

type FeeSplitterProps = {
    platformFee: number
    providerFee: number
    logisticsFee: number
    remaining: number
    onPlatformFeeChange: (value: number) => void
    onProviderFeeChange: (value: number) => void
    onLogisticsFeeChange: (value: number) => void
};

const FeeSplitter = (props: FeeSplitterProps) => {
    const isOverspent = props.remaining < 0

    return (
        <Card variant="outlined">
            <CardContent>
                <Typography variant="h6" gutterBottom>Fee Splitting</Typography>
                <Stack spacing={2}>
                    <TextField
                        label="Platform Fee (€)"
                        type="number"
                        value={props.platformFee}
                        onChange={(e) => props.onPlatformFeeChange(Number(e.target.value))}
                        slotProps={{ htmlInput: { min: 0, step: 0.01 } }}
                    />
                    <TextField
                        label="Payment Provider Fee (€)"
                        type="number"
                        value={props.providerFee}
                        onChange={(e) => props.onProviderFeeChange(Number(e.target.value))}
                        slotProps={{ htmlInput: { min: 0, step: 0.01 } }}
                    />
                    <TextField
                        label="Logistics Fee (€)"
                        type="number"
                        value={props.logisticsFee}
                        onChange={(e) => props.onLogisticsFeeChange(Number(e.target.value))}
                        slotProps={{ htmlInput: { min: 0, step: 0.01 } }}
                    />
                    <Box sx={{ bgcolor: isOverspent ? 'error.light' : 'success.light', p: 2, borderRadius: 1 }}>
                        <Typography variant="h6">
                            The merchant receives: €{props.remaining.toFixed(2)}
                        </Typography>
                        {isOverspent && (
                            <Typography variant="body2" color="error.dark">
                                Warning: Fees exceed the payment amount
                            </Typography>
                        )}
                    </Box>
                </Stack>
            </CardContent>
        </Card>
    );
};

export default FeeSplitter;
