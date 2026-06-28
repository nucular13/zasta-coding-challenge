import UnmatchedPaymentsList from "./UnmatchedPaymentsList.tsx";
import type {Invoice, Payment} from "../types";
import PaymentDetailsCard from "./PaymentDetailsCard.tsx";
import {Box, Button, Stack, Typography} from "@mui/material";
import InvoiceSelector from "./InvoiceSelector.tsx";
import InvoiceMatchWarnings from "./InvoiceMatchWarnings.tsx";
import FeeSplitter from "./FeeSplitter.tsx";
import ConfirmationModal from "./ConfirmationModal.tsx";

type PaymentManagementProps = {
    payments: Payment[];
    invoices: Invoice[];
    selectedPayment: Payment | null;
    onPaymentSelect: (payment: Payment) => void;
    selectedInvoice: Invoice | null;
    onInvoiceSelect: (invoice: Invoice | null) => void;
    platformFee: number;
    onPlatformFeeChange: (value: number) => void;
    providerFee: number;
    onProviderFeeChange: (value: number) => void;
    logisticsFee: number;
    onLogisticsFeeChange: (value: number) => void;
    remaining: number;
    modalOpen: boolean;
    onModalOpen: () => void;
    onModalClose: () => void;
};

const PaymentManagement = (props: PaymentManagementProps) => {
    const canConfirm = props.selectedInvoice !== null && props.remaining >= 0

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
                        <InvoiceMatchWarnings
                            payment={props.selectedPayment}
                            invoice={props.selectedInvoice}
                        />
                    )}
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
                    {props.selectedInvoice && (
                        <Button
                            variant="contained"
                            size="large"
                            disabled={!canConfirm}
                            onClick={props.onModalOpen}
                        >
                            Confirm Assignment
                        </Button>
                    )}
                </Stack>
            )}
            {props.selectedPayment && props.selectedInvoice && (
                <ConfirmationModal
                    open={props.modalOpen}
                    payment={props.selectedPayment}
                    invoice={props.selectedInvoice}
                    platformFee={props.platformFee}
                    providerFee={props.providerFee}
                    logisticsFee={props.logisticsFee}
                    remaining={props.remaining}
                    onClose={props.onModalClose}
                    onConfirm={props.onModalClose}
                />
            )}
        </Box>
    );
};

export default PaymentManagement;
