import UnmatchedPaymentsList from "./UnmatchedPaymentsList.tsx";
import type {Invoice, Payment} from "../../types";
import PaymentDetailsCard from "./PaymentDetailsCard.tsx";
import {Alert, Button, Container, Snackbar, Stack, Typography} from "@mui/material";
import InvoiceSelector from "../invoice/InvoiceSelector.tsx";
import InvoiceMatchWarnings from "../invoice/InvoiceMatchWarnings.tsx";
import FeeSplitter from "../fee/FeeSplitter.tsx";
import ConfirmationModal from "../confirmation/ConfirmationModal.tsx";
import {useState} from "react";

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
    const canConfirm = props.selectedInvoice !== null && props.remaining >= 0;
    const [toastOpen, setToastOpen] = useState(false);

    const handleConfirm = () => {
        props.onModalClose();
        setToastOpen(true);
    };

    return (
        <Container maxWidth="sm">
            <Stack spacing={3}>
                <Typography variant="h4" gutterBottom>Payment Management</Typography>
                <UnmatchedPaymentsList
                    payments={props.payments}
                    selectedPayment={props.selectedPayment}
                    onSelect={props.onPaymentSelect}
                />
                {props.selectedPayment && <PaymentDetailsCard payment={props.selectedPayment} />}
                {props.selectedPayment && (
                    <InvoiceSelector
                        invoices={props.invoices}
                        selectedInvoice={props.selectedInvoice}
                        onSelect={props.onInvoiceSelect}
                    />
                )}
                {props.selectedPayment && props.selectedInvoice && (
                    <InvoiceMatchWarnings
                        payment={props.selectedPayment}
                        invoice={props.selectedInvoice}
                    />
                )}
                {props.selectedPayment && props.selectedInvoice && (
                    <FeeSplitter
                        remaining={props.remaining}
                        paymentAmount={props.selectedPayment.amount}
                        onPlatformFeeChange={props.onPlatformFeeChange}
                        onProviderFeeChange={props.onProviderFeeChange}
                        onLogisticsFeeChange={props.onLogisticsFeeChange}
                    />
                )}
                {props.selectedPayment && props.selectedInvoice && (
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
                    onConfirm={handleConfirm}
                />
            )}
            <Snackbar
                open={toastOpen}
                autoHideDuration={4000}
                onClose={() => setToastOpen(false)}
                anchorOrigin={{vertical: 'top', horizontal: 'center'}}
            >
                <Alert severity="success" onClose={() => setToastOpen(false)}>
                    Payment assigned and invoice marked as paid.
                </Alert>
            </Snackbar>
        </Container>
    );
};

export default PaymentManagement;
