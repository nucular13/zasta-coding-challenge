import {Divider, Stack, Table, TableBody, TableCell, TableRow, Tooltip, Typography} from "@mui/material";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
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
    const nameMismatch = props.payment.senderName.trim().toLowerCase() !== props.invoice.customer.name.trim().toLowerCase();
    const referenceMismatch = props.payment.referenceNumber.trim().toLowerCase() !== props.invoice.invoiceNumber.trim().toLowerCase();
    const amountMismatch = props.payment.amount !== props.invoice.amount;

    const WarningIcon = ({title}: { title: string }) => (
        <Tooltip title={title}>
            <WarningAmberIcon fontSize="small" color="warning" />
        </Tooltip>
    );

    return (
        <Stack spacing={2}>
            <Typography variant="subtitle2"><strong>Payment</strong></Typography>
            <Table size="small">
                <TableBody>
                    <TableRow>
                        <TableCell>Sender</TableCell>
                        <TableCell align="right">
                            {nameMismatch && <WarningIcon title="Sender name does not match the invoice customer name." />}
                            {' '}{props.payment.senderName}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Amount</TableCell>
                        <TableCell align="right">
                            {amountMismatch && <WarningIcon title={props.payment.amount < props.invoice.amount ? 'Payment is less than the invoice amount.' : 'Payment exceeds the invoice amount.'} />}
                            {' '}€{props.payment.amount.toFixed(2)}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Reference</TableCell>
                        <TableCell align="right">
                            {referenceMismatch && <WarningIcon title="Reference number does not match the invoice number." />}
                            {' '}{props.payment.referenceNumber}
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <Divider/>
            <Typography variant="subtitle2"><strong>Assigned Invoice</strong></Typography>
            <Table size="small">
                <TableBody>
                    <TableRow>
                        <TableCell>Invoice</TableCell>
                        <TableCell align="right">
                            {referenceMismatch && <WarningIcon title="Invoice number does not match the payment reference." />}
                            {' '}{props.invoice.invoiceNumber}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Customer</TableCell>
                        <TableCell align="right">
                            {nameMismatch && <WarningIcon title="Customer name does not match the payment sender name." />}
                            {' '}{props.invoice.customer.name}
                        </TableCell>
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
