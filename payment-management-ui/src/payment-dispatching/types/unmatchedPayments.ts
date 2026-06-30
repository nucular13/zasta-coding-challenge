import type {Payment} from "./index.ts";

export const unmatchedPayments: Payment[] = [
    {
        id: 1,
        amount: 1250.00,
        senderName: "Max Müller",
        referenceNumber: "INV-2026-0069",
        status: "unmatched"
    },
    {
        id: 2,
        amount: 200,
        senderName: "Apu Nahasapeemapetilon",
        referenceNumber: "INV-2026-0070",
        status: "unmatched"
    },
    {
        id: 3,
        amount: 890.50,
        senderName: "Isolde Baden",
        referenceNumber: "INV-2026-0022",
        status: "unmatched"
    },
];

