import UnmatchedPaymentsList from "./UnmatchedPaymentsList.tsx";
import type {Invoice, Payment} from "../../types";
import PaymentDetailsCard from "./PaymentDetailsCard.tsx";
import {
    Alert,
    Button,
    Container,
    Snackbar,
    Stack,
    Step,
    StepButton,
    StepContent,
    Stepper,
    Typography,
} from "@mui/material";
import InvoiceSelector from "../invoice/InvoiceSelector.tsx";
import InvoiceMatchWarnings from "../invoice/InvoiceMatchWarnings.tsx";
import FeeSplitter from "../fee/FeeSplitter.tsx";
import ConfirmationModal from "../confirmation/ConfirmationModal.tsx";
import {useEffect, useState} from "react";

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

const STEP = {
    SELECT_PAYMENT: 0,
    ASSIGN_INVOICE: 1,
    SPLIT_FEES: 2,
} as const;

const PaymentManagement = (props: PaymentManagementProps) => {
    const [activeStep, setActiveStep] = useState<number>(STEP.SELECT_PAYMENT);
    const [toastOpen, setToastOpen] = useState(false);

    const canConfirm = props.selectedInvoice !== null && props.remaining >= 0;

    useEffect(() => {
        if (!props.selectedPayment) {
            setActiveStep(STEP.SELECT_PAYMENT);
        } else {
            setActiveStep(previousStep => previousStep === STEP.SELECT_PAYMENT ? STEP.ASSIGN_INVOICE : previousStep);
        }
    }, [props.selectedPayment]);

    useEffect(() => {
        if (!props.selectedInvoice) {
            setActiveStep(previousStep => previousStep > STEP.ASSIGN_INVOICE ? STEP.ASSIGN_INVOICE : previousStep);
        }
    }, [props.selectedInvoice]);

    const handleConfirm = () => {
        props.onModalClose();
        setToastOpen(true);
    };

    return (
        <Container maxWidth="sm">
            <Stack spacing={3}>
                <Typography variant="h4">Payment Management</Typography>
                <Stepper activeStep={activeStep} orientation="vertical" nonLinear>
                    <Step completed={!!props.selectedPayment}>
                        <StepButton
                            onClick={() => setActiveStep(STEP.SELECT_PAYMENT)}
                            optional={props.selectedPayment && activeStep !== STEP.SELECT_PAYMENT
                                ? <Typography variant="caption">{props.selectedPayment.senderName} | {props.selectedPayment.amount.toFixed(2)} €</Typography>
                                : undefined
                            }
                        >
                            Select Payment
                        </StepButton>
                        <StepContent>
                            <UnmatchedPaymentsList
                                payments={props.payments}
                                selectedPayment={props.selectedPayment}
                                onSelect={props.onPaymentSelect}
                            />
                        </StepContent>
                    </Step>
                    <Step completed={!!props.selectedInvoice && activeStep > STEP.ASSIGN_INVOICE}>
                        <StepButton
                            disabled={!props.selectedPayment}
                            onClick={() => props.selectedPayment && setActiveStep(STEP.ASSIGN_INVOICE)}
                            optional={props.selectedInvoice && activeStep > STEP.ASSIGN_INVOICE
                                ? <Typography variant="caption">{props.selectedInvoice.invoiceNumber} | {props.selectedInvoice.customer.name}</Typography>
                                : undefined
                            }
                        >
                            Assign Invoice
                        </StepButton>
                        <StepContent>
                            <Stack spacing={2}>
                                {props.selectedPayment && (
                                    <PaymentDetailsCard payment={props.selectedPayment}/>
                                )}
                                <InvoiceSelector
                                    invoices={props.invoices}
                                    selectedInvoice={props.selectedInvoice}
                                    onSelect={props.onInvoiceSelect}
                                />
                                {props.selectedInvoice && (
                                    <InvoiceMatchWarnings
                                        payment={props.selectedPayment!}
                                        invoice={props.selectedInvoice}
                                    />
                                )}
                                <Button
                                    variant="contained"
                                    disabled={!props.selectedInvoice}
                                    onClick={() => setActiveStep(STEP.SPLIT_FEES)}
                                >
                                    Continue to Fee Split
                                </Button>
                            </Stack>
                        </StepContent>
                    </Step>
                    <Step completed={false}>
                        <StepButton
                            disabled={!props.selectedInvoice}
                            onClick={() => props.selectedInvoice && setActiveStep(STEP.SPLIT_FEES)}
                        >
                            Split Fees & Confirm
                        </StepButton>
                        <StepContent>
                            <Stack spacing={2}>
                                {props.selectedPayment && (
                                    <FeeSplitter
                                        remaining={props.remaining}
                                        paymentAmount={props.selectedPayment.amount}
                                        onPlatformFeeChange={props.onPlatformFeeChange}
                                        onProviderFeeChange={props.onProviderFeeChange}
                                        onLogisticsFeeChange={props.onLogisticsFeeChange}
                                    />
                                )}
                                <Button
                                    variant="contained"
                                    size="large"
                                    disabled={!canConfirm}
                                    onClick={props.onModalOpen}
                                >
                                    Confirm Assignment
                                </Button>
                            </Stack>
                        </StepContent>
                    </Step>
                </Stepper>
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
