import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";

export default function CitySelector() {
    const [city, setCity] = React.useState('');

    const handleChange = (event) => {
        setCity(event.target.value);
    };

    return (
        <FormControl variant="outlined">
            <InputLabel>Select a City...</InputLabel>
            <Select
                value={city}
                onChange={handleChange}
                style={{ minWidth: "160px" }}
            >
                <MenuItem value="akl">Auckland</MenuItem>
                <MenuItem value="mel">Melbourne</MenuItem>
                <MenuItem value="syd">Syndey</MenuItem>
            </Select>
        </FormControl>
    );
}