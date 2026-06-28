import {Box, IconButton, Tooltip, Typography} from "@mui/material";
import {useState} from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

type CopyFieldProps = {
    label: string;
    value: string;
};

const CopyField = (props: CopyFieldProps) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(props.value);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography><strong>{props.label}:</strong> {props.value}</Typography>
            <Tooltip title={copied ? 'Copied!' : 'Copy'}>
                <IconButton size="small" onClick={handleCopy}>
                    <ContentCopyIcon fontSize="inherit" />
                </IconButton>
            </Tooltip>
        </Box>
    );
};

export default CopyField;
