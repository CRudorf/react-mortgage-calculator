import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";

const TenorSelect = ({data, setData}) => {
    const handleChange = (event) => {
        setData({...data, loanTerm: event.target.value})
    }
    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Tenure</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={data.loanTerm}
            label="Tenure"
            defaultValue={5}
            onChange={handleChange}
            >
            <MenuItem value={10}>10 years</MenuItem>
            <MenuItem value={15}>15 years</MenuItem>
            <MenuItem value={30}>30 years</MenuItem>
            </Select>
        </FormControl>
    )
}

export default TenorSelect;