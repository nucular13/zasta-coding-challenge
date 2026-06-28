import UnmatchedPaymentsList from "./UnmatchedPaymentsList.tsx";
import type {Invoice, Payment} from "../types";
import PaymentDetailsCard from "./PaymentDetailsCard.tsx";
import {Box, Stack, Typography} from "@mui/material";
import InvoiceSelector from "./InvoiceSelector.tsx";
import FeeSplitter from "./FeeSplitter.tsx";

type PaymentManagementProps = {
    payments: Payment[]
    invoices: Invoice[]
    selectedPayment: Payment | null
    onPaymentSelect: (payment: Payment) => void
    selectedInvoice: Invoice | null
    onInvoiceSelect: (invoice: Invoice | null) => void
    platformFee: number
    onPlatformFeeChange: (value: number) => void
    providerFee: number
    onProviderFeeChange: (value: number) => void
    logisticsFee: number
    onLogisticsFeeChange: (value: number) => void
    remaining: number
};

const PaymentManagement = (props: PaymentManagementProps) => {
    return (
        <Box sx={{ maxWidth: 680, mx: 'auto', py: 4, px: 2 }}>
            <Typography variant="h4" gutterBottom>Payment Management</Typography>
            <UnmatchedPaymentsList
                payments={props.payments}
                selectedPayment={props.selectedPayment}
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
                    {props.selectedInvoice && (
                        <FeeSplitter
                            platformFee={props.platformFee}
                            onPlatformFeeChange={props.onPlatformFeeChange}
                            providerFee={props.providerFee}
                            onProviderFeeChange={props.onProviderFeeChange}
                            logisticsFee={props.logisticsFee}
                            onLogisticsFeeChange={props.onLogisticsFeeChange}
                            remaining={props.remaining}
                        />
                    )}
                </Stack>
            )}
        </Box>
    );
};

export default PaymentManagement;
