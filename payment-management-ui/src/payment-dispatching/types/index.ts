export type Customer = {
    id: number;
    name: string;
}

export type Invoice = {
    id: number;
    amount: number;
    invoiceNumber: string;
    customer: Customer;
    status: 'open' | 'paid';
}

export type Payment = {
    id: number;
    amount: number;
    senderName: string;
    referenceNumber: string;
    status: 'unmatched' | 'assigned';
}

export type FeePreset = {
    label: string;
    percentage: number;
}
