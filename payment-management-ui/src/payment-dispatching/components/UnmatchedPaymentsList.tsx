import {List, ListItem, Typography} from "@mui/material";
import PaymentDetailsCard from "./PaymentDetailsCard.tsx";
import type {Payment} from "../types";

type UnmatchedPaymentsListProps = {
    payments: Payment[]
};

const UnmatchedPaymentsList = (props: UnmatchedPaymentsListProps) => {
    return (
        <List>
            <Typography variant="h6">Unmatched Payments</Typography>
            {props.payments.map((payment) => (
                <ListItem key={payment.id}>
                    <PaymentDetailsCard payment={payment}/>
                </ListItem>
            ))}
        </List>
    );
};

export default UnmatchedPaymentsList;
