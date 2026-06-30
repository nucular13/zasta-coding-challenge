import {Divider, Stack} from "@mui/material";
import FeeInputGroup from "./FeeInputGroup.tsx";
import {
    LOGISTICS_PROVIDER_FEE_PRESETS,
    PAYMENT_PROVIDER_FEE_PRESETS,
    PLATFORM_PROVIDER_FEE_PRESETS,
} from "../../types/fee-presets.ts";

type FeeControlProps = {
    paymentAmount: number;
    onPlatformFeeChange: (value: number) => void;
    onProviderFeeChange: (value: number) => void;
    onLogisticsFeeChange: (value: number) => void;
};

const FeeControl = (props: FeeControlProps) => {
    return (
        <Stack spacing={3} divider={<Divider />}>
            <FeeInputGroup
                label="Platform Fee"
                paymentAmount={props.paymentAmount}
                presets={PLATFORM_PROVIDER_FEE_PRESETS}
                onFeeChange={props.onPlatformFeeChange}
            />
            <FeeInputGroup
                label="Payment Provider Fee"
                paymentAmount={props.paymentAmount}
                presets={PAYMENT_PROVIDER_FEE_PRESETS}
                onFeeChange={props.onProviderFeeChange}
            />
            <FeeInputGroup
                label="Logistics Fee"
                paymentAmount={props.paymentAmount}
                presets={LOGISTICS_PROVIDER_FEE_PRESETS}
                onFeeChange={props.onLogisticsFeeChange}
            />
        </Stack>
    );
};

export default FeeControl;
