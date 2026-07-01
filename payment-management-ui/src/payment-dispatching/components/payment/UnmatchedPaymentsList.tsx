import {CardContent, Chip, Divider, List, ListItemButton, ListItemText, Paper, Typography} from '@mui/material'
import type {Payment} from '../../types'

type UnmatchedPaymentsListProps = {
    payments: Payment[];
    selectedPayment: Payment | null;
    onSelect: (payment: Payment) => void;
};

const UnmatchedPaymentsList = (props: UnmatchedPaymentsListProps) => {
    return (
        <Paper variant="outlined">
            <CardContent>
                <Typography variant="h5">Unmatched Payments</Typography>
                <Typography variant="subtitle1">Select an unmatched payment from the list:</Typography>
            </CardContent>
            <Divider/>
            <List>
                {props.payments.map((payment) => (
                    <ListItemButton
                        key={payment.id}
                        selected={props.selectedPayment?.id === payment.id}
                        onClick={() => props.onSelect(payment)}
                        divider={props.payments.length > 1}
                        disabled={payment.status === 'assigned'}
                    >
                        <ListItemText
                            primary={`${payment.senderName} | ${payment.amount.toFixed(2)} €`}
                            secondary={payment.referenceNumber}
                        />
                        {payment.status === 'assigned' && (
                            <Chip label="Assigned" size="small" color="success" />
                        )}
                    </ListItemButton>
                ))}
            </List>
        </Paper>
    );
};

export default UnmatchedPaymentsList;
