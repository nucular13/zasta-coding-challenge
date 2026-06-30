import {useState} from "react";
import type {Invoice, Payment} from "../../types";
import PaymentManagement from "./PaymentManagement.tsx";
import {unmatchedPayments} from "../../types/unmatchedPayments.ts";
import {invoices} from "../../types/invoices.ts";

const PaymentManagementPage = () => {
    const [selectedPayment, setSelectedPayment] = useState<Payment | null>(null);
    const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);
    const [platformFee, setPlatformFee] = useState<number>(0);
    const [providerFee, setProviderFee] = useState<number>(0);
    const [logisticsFee, setLogisticsFee] = useState<number>(0);
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    const remaining = (selectedPayment?.amount ?? 0) - platformFee - providerFee - logisticsFee;

    const handlePaymentSelect = (payment: Payment) => {
        setSelectedPayment(payment);
        setSelectedInvoice(null);
        setPlatformFee(0);
        setProviderFee(0);
        setLogisticsFee(0);
    }
    return (
        <div>
            <PaymentManagement
                payments={unmatchedPayments}
                invoices={invoices}
                selectedPayment={selectedPayment}
                onPaymentSelect={handlePaymentSelect}
                selectedInvoice={selectedInvoice}
                onInvoiceSelect={setSelectedInvoice}
                platformFee={platformFee}
                onPlatformFeeChange={setPlatformFee}
                providerFee={providerFee}
                onProviderFeeChange={setProviderFee}
                logisticsFee={logisticsFee}
                onLogisticsFeeChange={setLogisticsFee}
                remaining={remaining}
                modalOpen={modalOpen}
                onModalOpen={() => setModalOpen(true)}
                onModalClose={() => setModalOpen(false)}
            />
        </div>
    )
}

export default PaymentManagementPage;
