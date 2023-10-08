import { Slider, Stack, Typography } from "@mui/material";

const GenericSlider = ({
    defaultValue,
    min,
    max,
    label,
    unit,
    onChange,
    amount,
    value,
    steps
}) => {
    return (
        <Stack my={1.4}>
            <Typography variant="subtitle2">{label}</Typography>
            <Typography variant="h5">
                {unit} {amount}
            </Typography>
            <Stack direction="row" justifyContent="space-between">
                <Typography variant="caption" color="text.secondary">
                    {unit} {min}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                    {unit} {max}
                </Typography>
            </Stack>
            <Slider
                min={min}
                max={max}
                defaultValue={defaultValue}
                aria-label="Default"
                valueLabelDisplay="auto"
                onChange={onChange}
                value={value}
                marks
                step={steps}
            />
        </Stack>
        
    )
}

export default GenericSlider;