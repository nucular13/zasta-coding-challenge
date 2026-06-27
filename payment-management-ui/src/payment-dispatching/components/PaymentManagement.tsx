import UnmatchedPaymentsList from "./UnmatchedPaymentsList.tsx";
import type {Payment} from "../types";

type PaymentManagementProps = {
    payments: Payment[]
};

const PaymentManagement = (props: PaymentManagementProps) => {
    return (
        <>
            <h1>Payment Management</h1>
            <UnmatchedPaymentsList payments={props.payments}/>
        </>
    );
};

export default PaymentManagement;
