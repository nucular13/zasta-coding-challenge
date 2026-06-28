import type {Payment} from "../types";

type PaymentDetailsCardProps = {
    payment: Payment
};

const PaymentDetailsCard = (props: PaymentDetailsCardProps) => {
    return (
        <div>
            <p>Payment ID: {props.payment.id} </p>
            <p>Reference number: {props.payment.referenceNumber} </p>
            <p>Name of sender: {props.payment.senderName} </p>
            <p>Amount: {props.payment.amount} €</p>
        </div>
    );
};

export default PaymentDetailsCard;
