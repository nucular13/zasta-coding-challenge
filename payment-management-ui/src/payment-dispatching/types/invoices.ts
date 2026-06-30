import type {Invoice} from "./index.ts";

export const invoices: Invoice[] = [
    {
        id: 1,
        amount: 1250.00,
        invoiceNumber: "INV-2026-0069",
        customer: {id: 1, name: "Max Müller"},
        status: "open"
    },
    {
        id: 2,
        amount: 980.50,
        invoiceNumber: "INV-2026-0022",
        customer: {id: 2, name: "Isolde Baden"},
        status: "open"
    },
    {
        id: 3,
        amount: 1500.00,
        invoiceNumber: "INV-2026-0024",
        customer: {id: 3, name: "Acme Corp"},
        status: "open"
    },
    {
        id: 4,
        amount: 80.00,
        invoiceNumber: "INV-2026-0089",
        customer: {id: 1, name: "Max Müller"},
        status: "open"
    },
    {
        id: 5,
        amount: 99.99,
        invoiceNumber: "INV-2026-0075",
        customer: {id: 2, name: "Isolde Baden"},
        status: "open"
    },
];