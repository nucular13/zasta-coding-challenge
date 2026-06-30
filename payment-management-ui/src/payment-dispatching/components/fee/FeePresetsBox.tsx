import {Box, ToggleButton, ToggleButtonGroup, Typography} from "@mui/material";

type FeePresetsBoxProps = {
    selectedPreset: string | null;
    presets: { label: string; percentage: number }[];
    handlePresetChange: (_: React.MouseEvent<HTMLElement>, newPreset: string | null) => void;
};

const FeePresetsBox = (props: FeePresetsBoxProps) => {
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            <Typography variant="body2" color="text.secondary">Presets:</Typography>
            <ToggleButtonGroup
                value={props.selectedPreset}
                exclusive
                onChange={props.handlePresetChange}
                size="small"
            >
                {props.presets.map(p => (
                    <ToggleButton key={p.label} value={p.label}>
                        {p.label} ({p.percentage}%)
                    </ToggleButton>
                ))}
            </ToggleButtonGroup>
        </Box>
    );
};

export default FeePresetsBox;
