import { Container, Grid, Typography, ButtonGroup, Button } from "@material-ui/core"
import "./weather.css"
import WeatherCard from "../components/WeatherCard.js"

export default function Weather() {
    const city = "Auckland"
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ]
    const dateObject = new Date()
    const year = dateObject.getFullYear()
    const month = months[dateObject.getMonth()]
    const date = dateObject.getDate()
    
    return (
        <Container className="root">
            <Typography variant="h4">
                Weather in {city}
            </Typography>
            <Typography variant="h6">
                Extracted from Weather API | {date} {month} {year}
            </Typography>
            <ButtonGroup className="noOfDaySelector" color="primary">
                <Button>3 Days</Button>
                <Button>5 Days</Button>
                <Button>7 Days</Button>
            </ButtonGroup>
            <Grid container justify="center" spacing={3}>
                <Grid item>
                    <WeatherCard />
                </Grid>
                <Grid item>
                    <WeatherCard />
                </Grid>
                <Grid item>
                    <WeatherCard />
                </Grid>
                <Grid item>
                    <WeatherCard />
                </Grid>
                <Grid item>
                    <WeatherCard />
                </Grid>
                <Grid item>
                    <WeatherCard />
                </Grid>
                <Grid item>
                    <WeatherCard />
                </Grid>
            </Grid>
        </Container>
    )
}