import {TextField} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import type {Invoice} from "../types";

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
            getOptionLabel={(invoice) => `${invoice.invoiceNumber} | ${invoice.customer.name} | (€${invoice.amount.toFixed(2)})`}
            onChange={(_event, value) => props.onSelect(value)}
            renderInput={(params) => (
                <TextField {...params} label="Search invoice" placeholder="Type at least 1 character..." />
            )}
        />
    );
};

export default InvoiceAutoCompleteSearchbar;
