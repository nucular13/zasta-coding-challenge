import {useState} from "react";
import type {Invoice, Payment} from "../types";
import PaymentManagement from "./PaymentManagement.tsx";

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

const mockInvoices: Invoice[] = [
    {
        id: 1,
        amount: 1250.00,
        invoiceNumber: "inv-001",
        customer: {id: 1, name: "Max Müller"}
    },
    {
        id: 2,
        amount: 980.50,
        invoiceNumber: "inv-002",
        customer: {id: 2, name: "Isolde Baden"}
    },
    {
        id: 3,
        amount: 1500.00,
        invoiceNumber: "inv-003",
        customer: {id: 3, name: "Acme Corp"}
    },
]

const PaymentManagementPage = () => {
    const [selectedPayment, setSelectedPayment] = useState<Payment | null>(null);
    const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);

    const handlePaymentSelect = (payment: Payment) => {
        setSelectedPayment(payment);
        setSelectedInvoice(null);
    }
    return (
        <div>
            <PaymentManagement
                payments={mockUnmatchedPayments}
                invoices={mockInvoices}
                selectedPayment={selectedPayment}
                onPaymentSelect={handlePaymentSelect}
                selectedInvoice={selectedInvoice}
                onInvoiceSelect={setSelectedInvoice}
            />
        </div>
    )
}

export default PaymentManagementPage;
