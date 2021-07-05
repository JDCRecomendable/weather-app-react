import { Grid, Button } from "@material-ui/core"
import "./citySelect.css"
import CitySelector from "../components/CitySelector";

export default function CitySelect() {
    return (
        <Grid container justify="center" align="center" alignItems="center">
            <Grid item xs>
                <CitySelector />
            </Grid>
            <Grid item xs>
                <Button variant="contained">Proceed</Button>
            </Grid>
        </Grid>
    )
}