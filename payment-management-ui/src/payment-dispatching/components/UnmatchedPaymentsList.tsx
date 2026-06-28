import {Divider, List, ListItemButton, ListItemText, Paper, Typography} from '@mui/material'
import type {Payment} from '../types'

type UnmatchedPaymentsListProps = {
    payments: Payment[];
    selectedPayment: Payment | null;
    onSelect: (payment: Payment) => void;
};

const UnmatchedPaymentsList = (props: UnmatchedPaymentsListProps) => {
    return (
        <Paper variant="outlined">
            <Typography variant="h5" sx={{ p: 2, pb: 1 }}>Unmatched Payments</Typography>
            <Typography variant="subtitle1" sx={{ p: 2, pb: 1 }}>Select an unmatched payment from the list:</Typography>
            <Divider/>
            <List>
                {props.payments.map((payment) => (
                    <ListItemButton
                        key={payment.id}
                        selected={props.selectedPayment?.id === payment.id}
                        onClick={() => props.onSelect(payment)}
                        divider={props.payments.length > 1}
                    >
                        <ListItemText
                            primary={`${payment.senderName} | ${payment.amount.toFixed(2)} €`}
                            secondary={payment.referenceNumber}
                        />
                    </ListItemButton>
                ))}
            </List>
        </Paper>
    );
};

export default UnmatchedPaymentsList;
