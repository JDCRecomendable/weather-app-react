import React from "react"
import { ButtonGroup, Button } from "@material-ui/core"
import "./NoOfDaySelector.css"

export default function NoOfDaySelector() {
    const [noOfDays, setNoOfDays] = React.useState(3);

    return (
        <ButtonGroup className="noOfDaySelector" color="primary">
            <Button
                onClick={() => setNoOfDays(3)}
                variant={(noOfDays === 3) ? "contained" : "outlined"}
            >3 Days</Button>
            <Button
                onClick={() => setNoOfDays(5)}
                variant={(noOfDays === 5) ? "contained" : "outlined"}
            >5 Days</Button>
            <Button
                onClick={() => setNoOfDays(7)}
                variant={(noOfDays === 7) ? "contained" : "outlined"}
            >7 Days</Button>
        </ButtonGroup>
    );
}