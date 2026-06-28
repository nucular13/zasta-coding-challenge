import UnmatchedPaymentsList from "./UnmatchedPaymentsList.tsx";
import type {Payment} from "../types";
import PaymentDetailsCard from "./PaymentDetailsCard.tsx";
import {Stack} from "@mui/material";

type PaymentManagementProps = {
    payments: Payment[]
    selectedPayment: Payment | null
    onPaymentSelect: (payment: Payment) => void
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
                </Stack>
            )}
        </>
    );
};

export default PaymentManagement;
