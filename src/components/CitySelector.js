import React from "react";
import { FormControl, InputLabel, Select } from "@material-ui/core";

export default function CitySelector() {
    const [state, setState] = React.useState({
        city: "",
        name: "",
    });

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
    };

    return (
        <FormControl variant="outlined">
            <InputLabel>Select City...</InputLabel>
            <Select
                native
                value={state.city}
                label="City"
                onChange={handleChange}
                inputProps={{
                    name: 'city',
                }}
            >
                <option value="" />
                <option value="akl">Auckland</option>
                <option value="mel">Melbourne</option>
                <option value="syd">Syndey</option>
            </Select>
        </FormControl>
    );
}