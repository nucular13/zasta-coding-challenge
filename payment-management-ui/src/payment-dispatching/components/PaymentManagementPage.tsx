import {useState} from "react";
import PaymentManagement from "./PaymentManagement.tsx";
import type {Payment} from "../types";

const mockUnmatchedPayments: Payment[] = [
    {
        id: 1,
        amount: 100,
        senderName: "Max Müller",
        referenceNumber: "REF-2026-0069"
    },
    {
        id: 2,
        amount: 200,
        senderName: "Gerhard Linkemeyer",
        referenceNumber: "REF-2026-0070"
    },
];

const PaymentManagementPage = () => {
    const [selectedPayment, setSelectedPayment] = useState<Payment | null>(null)
    
    const handlePaymentSelect = (payment: Payment) => {
        setSelectedPayment(payment)
    }
    return (
        <div>
            <PaymentManagement
                payments={mockUnmatchedPayments}
                selectedPayment={selectedPayment}
                onPaymentSelect={handlePaymentSelect}
            />
        </div>
    )
}

export default PaymentManagementPage;
