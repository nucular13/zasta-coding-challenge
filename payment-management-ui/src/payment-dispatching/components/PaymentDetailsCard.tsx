import type {Payment} from "../types";
import {Card, CardContent, Stack, Typography} from "@mui/material";
import CopyField from "./CopyField.tsx";

type PaymentDetailsCardProps = {
    payment: Payment;
};

const PaymentDetailsCard = (props: PaymentDetailsCardProps) => {
    return (
        <Card variant="outlined">
            <CardContent>
                <Typography variant="h6">Payment Details</Typography>
                <Stack spacing={1}>
                    <CopyField label="Sender" value={props.payment.senderName} />
                    <CopyField label="Amount" value={props.payment.amount.toFixed(2)} />
                    <CopyField label="Reference" value={props.payment.referenceNumber} />
                </Stack>
            </CardContent>
        </Card>
    );
};

export default PaymentDetailsCard;
