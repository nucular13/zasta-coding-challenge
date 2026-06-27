import type {Payment} from "../types";
import PaymentManagement from "./PaymentManagement.tsx";

const mockPayment: Payment = {
    id: 1,
    amount: 100,
    senderName: "Max Müller",
    referenceNumber: "REF-2026-0069"
};

const PaymentManagementPage = () => {
    return (
        <div>
            <PaymentManagement payments={[mockPayment]}/>
        </div>
    )
}
export default PaymentManagementPage;
