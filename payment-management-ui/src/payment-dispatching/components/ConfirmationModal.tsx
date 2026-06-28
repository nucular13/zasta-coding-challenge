import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from '@mui/material'
import type {Invoice, Payment} from '../types'
import ConfirmationSummary from "./ConfirmationSummary.tsx";

type ConfirmationModalProps = {
    open: boolean,
    payment: Payment,
    invoice: Invoice,
    platformFee: number,
    providerFee: number,
    logisticsFee: number,
    remaining: number,
    onClose: () => void,
    onConfirm: () => void,
}

const ConfirmationModal = (props: ConfirmationModalProps) => {
    return (
        <Dialog open={props.open} onClose={props.onClose} maxWidth="sm" fullWidth>
            <DialogTitle>Confirm Payment Assignment</DialogTitle>
            <DialogContent>
                <ConfirmationSummary
                    payment={props.payment}
                    invoice={props.invoice}
                    platformFee={props.platformFee}
                    providerFee={props.providerFee}
                    logisticsFee={props.logisticsFee}
                    remaining={props.remaining}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={props.onClose}>Cancel</Button>
                <Button variant="contained" onClick={props.onConfirm}>Confirm</Button>
            </DialogActions>
        </Dialog>
    )
}

export default ConfirmationModal
