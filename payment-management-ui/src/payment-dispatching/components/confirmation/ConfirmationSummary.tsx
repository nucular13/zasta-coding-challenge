import {Divider, Stack, Table, TableBody, TableCell, TableRow, Typography} from "@mui/material";
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
        <Stack spacing={2}>
            <Typography variant="subtitle2"><strong>Payment</strong></Typography>
            <Table size="small">
                <TableBody>
                    <TableRow>
                        <TableCell>Sender</TableCell>
                        <TableCell align="right">{props.payment.senderName}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Amount</TableCell>
                        <TableCell align="right">€{props.payment.amount.toFixed(2)}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Reference</TableCell>
                        <TableCell align="right">{props.payment.referenceNumber}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <Divider/>
            <Typography variant="subtitle2"><strong>Assigned Invoice</strong></Typography>
            <Table size="small">
                <TableBody>
                    <TableRow>
                        <TableCell>Invoice</TableCell>
                        <TableCell align="right">{props.invoice.invoiceNumber}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Customer</TableCell>
                        <TableCell align="right">{props.invoice.customer.name}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <Divider/>
            <Typography variant="subtitle2"><strong>Fee Splits</strong></Typography>
            <Table size="small">
                <TableBody>
                    <TableRow>
                        <TableCell>Platform Fee</TableCell>
                        <TableCell align="right">€{props.platformFee.toFixed(2)}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Payment Provider Fee</TableCell>
                        <TableCell align="right">€{props.providerFee.toFixed(2)}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Logistics Fee</TableCell>
                        <TableCell align="right">€{props.logisticsFee.toFixed(2)}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <Divider/>
            <Table size="small">
                <TableBody>
                    <TableRow>
                        <TableCell><strong>Merchant receives</strong></TableCell>
                        <TableCell align="right"><strong>€{props.remaining.toFixed(2)}</strong></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Stack>
    );
};

export default ConfirmationSummary;
