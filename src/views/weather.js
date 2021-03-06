import { Container, Grid, Typography } from "@material-ui/core"
import "./weather.css"
import WeatherCard from "../components/WeatherCard.js"
import NoOfDaySelector from "../components/NoOfDaySelector"

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
            <NoOfDaySelector />
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