# Payment Management UI

A frontend for manually assigning unmatched payments to invoices and splitting payment amounts across platform, provider and logistics fees and calculate the remaining amount for the merchant.

---

## Tech Stack

- React 19 with TypeScript
- Vite for bundling and dev server
- MUI v6 (Material UI) for components and theming
- Yarn as  package manager

---

## Getting started

Make sure you have Node.js (v18+) and Yarn installed.

```bash
# go to frontend directory
cd payment-management-ui

# install dependencies
yarn install

# start the development server
yarn dev
```

The app is available in browser at `http://localhost:5173`.

---

## What it does

The app walks a support agent through a step flow for handling a payment that couldn't be automatically matched.
The stepper on the left tracks where you are and shows a summary of what you picked in each completed step.

**1. Select Payment**

List of unmatched payments is shown. Click one you want to assign to an invoice.

**2. Assign Invoice**

Payment details are displayed with copy buttons for easy search.
You can search now for an invoice by number, customer name or amount using the search autocomplete field.
The app will highlight mismatches between the attributes of payment and invoice so you can spot problems before confirming.

**3. Split Fees**

Then you have to type in three fee inputs for:
platform, payment provider and logistics fee.
Fee presets are available.
The remaining amount will be calculated considering the fees you entered.
There will be a warning if the fees exceed the payment amount.

**4. Confirm**

A modal opens up and summarizes the full assignment with warning icons on any mismatched fields.
Confirming the assigned invoice shows a toast notification and completes the flow.

---

## Design decisions

**MUI theme over inline styles**: almost all of the styling is in `theme.ts` rather than MUI `sx` props.

**Vertical stepper as navigation**: the stepper shows where you are in workflow and keeps the page short.

**Mismatch warnings**: the app warns about mismatches in name/reference/amount, but doesn't prevent assignment.

**Mocked data**: payments and invoices are avalable hardcoded.
