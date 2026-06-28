import {Alert, Stack} from '@mui/material'
import type {Invoice, Payment} from '../types'

type InvoiceMatchWarningsProps = {
    payment: Payment;
    invoice: Invoice;
}

const InvoiceMatchWarnings = (props: InvoiceMatchWarningsProps) => {
    const nameMismatch = props.payment.senderName.trim().toLowerCase() !== props.invoice.customer.name.trim().toLowerCase()
    const referenceMismatch = props.payment.referenceNumber.trim().toLowerCase() !== props.invoice.invoiceNumber.trim().toLowerCase()
    const underpaid = props.payment.amount < props.invoice.amount
    const overpaid = props.payment.amount > props.invoice.amount

    if (!nameMismatch && !referenceMismatch && !underpaid && !overpaid) {
        return null
    }

    return (
        <Stack spacing={1}>
            {nameMismatch && (
                <Alert severity="warning">
                    Sender name <strong>{props.payment.senderName}</strong> does not match invoice customer <strong>{props.invoice.customer.name}</strong>.
                </Alert>
            )}
            {referenceMismatch && (
                <Alert severity="warning">
                    Reference number <strong>{props.payment.referenceNumber}</strong> does not match invoice number <strong>{props.invoice.invoiceNumber}</strong>.
                </Alert>
            )}
            {underpaid && (
                <Alert severity="warning">
                    Payment amount <strong>€{props.payment.amount.toFixed(2)}</strong> is less than invoice amount <strong>€{props.invoice.amount.toFixed(2)}</strong>. Invoice will not be fully paid.
                </Alert>
            )}
            {overpaid && (
                <Alert severity="warning">
                    Payment amount <strong>€{props.payment.amount.toFixed(2)}</strong> exceeds invoice amount <strong>€{props.invoice.amount.toFixed(2)}</strong>. Invoice will be overpaid.
                </Alert>
            )}
        </Stack>
    )
};

export default InvoiceMatchWarnings;
