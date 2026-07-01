import {Chip, ListItem, Stack, TextField, Typography} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import type {Invoice} from "../../types";

type InvoiceAutoCompleteSearchbarProps = {
    invoices: Invoice[];
    selectedInvoice: Invoice | null;
    onSelect: (invoice: Invoice | null) => void;
};

const InvoiceAutoCompleteSearchbar = (props: InvoiceAutoCompleteSearchbarProps) => {
    return (
        <Autocomplete
            options={props.invoices}
            value={props.selectedInvoice}
            getOptionLabel={(invoice) => `${invoice.invoiceNumber} | ${invoice.customer.name} | (${invoice.amount.toFixed(2)} €)`}
            getOptionDisabled={(invoice) => invoice.status === 'paid'}
            onChange={(_event, value) => props.onSelect(value)}
            renderOption={(optionProps, invoice) => (
                <ListItem {...optionProps} key={invoice.id}>
                    <Stack direction="row" spacing={1}>
                        <Typography >
                            {invoice.invoiceNumber} | {invoice.customer.name} | {invoice.amount.toFixed(2)} €
                        </Typography>
                        {invoice.status === 'paid' && (
                            <Chip label="Paid" size="small" color="success" />
                        )}
                    </Stack>
                </ListItem>
            )}
            renderInput={(params) => (
                <TextField {...params} label="Search invoice" placeholder="Type at least 1 character..." />
            )}
        />
    );
};

export default InvoiceAutoCompleteSearchbar;
