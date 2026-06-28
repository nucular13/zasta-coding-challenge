import UnmatchedPaymentsList from "./UnmatchedPaymentsList.tsx";
import type {Invoice, Payment} from "../types";
import PaymentDetailsCard from "./PaymentDetailsCard.tsx";
import {Stack} from "@mui/material";
import InvoiceSelector from "./InvoiceSelector.tsx";

type PaymentManagementProps = {
    payments: Payment[]
    invoices: Invoice[]
    selectedPayment: Payment | null
    onPaymentSelect: (payment: Payment) => void
    selectedInvoice: Invoice | null
    onInvoiceSelect: (invoice: Invoice | null) => void
};

const PaymentManagement = (props: PaymentManagementProps) => {
    return (
        <>
            <h1>Payment Management</h1>
            <UnmatchedPaymentsList
                payments={props.payments}
                selectedPayment={null}
                onSelect={props.onPaymentSelect}
                />
            {props.selectedPayment && (
                <Stack spacing={3} sx={{ mt: 3 }}>
                    <PaymentDetailsCard payment={props.selectedPayment} />
                    <InvoiceSelector
                        invoices={props.invoices}
                        selectedInvoice={props.selectedInvoice}
                        onSelect={props.onInvoiceSelect}
                    />
                </Stack>
            )}
        </>
    );
};

export default PaymentManagement;
