import {Stack, TextField, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import type {FeePreset} from "../../types";
import FeeResult from "./FeeResult.tsx";
import FeePresets from "./FeePresets.tsx";

type FeeInputGroupProps = {
    label: string;
    paymentAmount: number;
    presets: FeePreset[];
    onFeeChange: (value: number) => void;
};

const FeeInputGroup = (props: FeeInputGroupProps) => {
    const [feePercentage, setFeePercentage] = useState<number>(0);
    const [selectedPreset, setSelectedPreset] = useState<string | null>(null);

    const computedFee = (feePercentage / 100) * props.paymentAmount;

    useEffect(() => {
        props.onFeeChange(computedFee);
    }, [computedFee]);

    const handlePresetChange = (_: React.MouseEvent, newPreset: string | null) => {
        if (!newPreset) {
            return;
        }
        const preset = props.presets.find(p => p.label === newPreset);
        if (preset) {
            setFeePercentage(preset.percentage);
            setSelectedPreset(preset.label);
        }
    };

    const handleFeeRateChange = (value: number) => {
        setFeePercentage(value);
        setSelectedPreset(null);
    };

    return (
        <Stack spacing={1}>
            <Typography variant="subtitle2" color="text.secondary">{props.label}</Typography>
            <TextField
                label="Fee (%)"
                type="number"
                size="small"
                value={feePercentage}
                onChange={(e) => handleFeeRateChange(Number(e.target.value))}
                slotProps={{ htmlInput: { min: 0, step: 0.1 } }}
            />
            <FeePresets
                selectedPreset={selectedPreset}
                presets={props.presets}
                handlePresetChange={handlePresetChange}
            />
            <FeeResult feeValue={computedFee} />
        </Stack>
    );
};

export default FeeInputGroup;
