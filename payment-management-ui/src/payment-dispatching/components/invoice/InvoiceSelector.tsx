import {CardContent, Paper, Typography} from '@mui/material'
import type {Invoice} from '../../types'
import InvoiceAutoCompleteSearchbar from "./InvoiceAutoCompleteSearchbar.tsx";

type InvoiceSelectorProps = {
    invoices: Invoice[];
    selectedInvoice: Invoice | null;
    onSelect: (invoice: Invoice | null) => void;
}

const InvoiceSelector = (props: InvoiceSelectorProps) => {
    return (
        <Paper variant="outlined">
            <CardContent>
                <Typography variant="h6" gutterBottom>Assign Invoice</Typography>
                <Typography variant="subtitle1" gutterBottom>
                    Search for an invoice to assign this payment to. You can search by invoice number, customer name or amount.
                </Typography>
                <InvoiceAutoCompleteSearchbar
                    invoices={props.invoices}
                    selectedInvoice={props.selectedInvoice}
                    onSelect={props.onSelect}
                />
            </CardContent>
        </Paper>
    )
}

export default InvoiceSelector
