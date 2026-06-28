import {Divider, Stack, Typography} from "@mui/material";
import type {Invoice, Payment} from "../../types";

type ConfirmationSummaryProps = {
    payment: Payment;
    invoice: Invoice;
    platformFee: number;
    providerFee: number;
    logisticsFee: number;
    remaining: number;
};

const ConfirmationSummary = (props: ConfirmationSummaryProps) => {
    return (
        <Stack spacing={1.5}>
            <Typography variant="subtitle2" color="text.secondary">Payment</Typography>
            <Typography><strong>Sender:</strong> {props.payment.senderName}</Typography>
            <Typography><strong>Amount:</strong> €{props.payment.amount.toFixed(2)}</Typography>
            <Typography><strong>Reference:</strong> {props.payment.referenceNumber}</Typography>
            <Divider/>
            <Typography variant="subtitle2" color="text.secondary">Assigned Invoice</Typography>
            <Typography><strong>Invoice:</strong> {props.invoice.invoiceNumber}</Typography>
            <Typography><strong>Customer:</strong> {props.invoice.customer.name}</Typography>
            <Divider/>
            <Typography variant="subtitle2" color="text.secondary">Fee Splits</Typography>
            <Typography>Platform Fee: €{props.platformFee.toFixed(2)}</Typography>
            <Typography>Payment Provider Fee: €{props.providerFee.toFixed(2)}</Typography>
            <Typography>Logistics Fee: €{props.logisticsFee.toFixed(2)}</Typography>
            <Divider/>
            <Typography variant="h6">Merchant receives: €{props.remaining.toFixed(2)}</Typography>
        </Stack>
    );
};

export default ConfirmationSummary;
