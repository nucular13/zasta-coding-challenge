import type {Payment} from "../types";
import {Card, CardContent, Stack, Typography} from "@mui/material";

type PaymentDetailsCardProps = {
    payment: Payment;
};

const PaymentDetailsCard = (props: PaymentDetailsCardProps) => {
    return (
        <Card variant="outlined">
            <CardContent>
                <Typography variant="h6">Payment Details</Typography>
                <Stack spacing={1}>
                    <Typography><strong>Sender:</strong> {props.payment.senderName}</Typography>
                    <Typography><strong>Amount:</strong> {props.payment.amount.toFixed(2)} €</Typography>
                    <Typography><strong>Reference:</strong> {props.payment.referenceNumber}</Typography>
                </Stack>
            </CardContent>
        </Card>
    );
};

export default PaymentDetailsCard;
