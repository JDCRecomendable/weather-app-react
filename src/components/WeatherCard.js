import { Container, Typography } from "@material-ui/core"
import "./WeatherCard.css"

export default function WeatherCard() {
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
    const days = [
        "SUNDAY",
        "MONDAY",
        "TUESDAY",
        "WEDNESDAY",
        "THURSDAY",
        "FRIDAY",
        "SATURDAY",
    ]
    const dateObject = new Date()
    const month = months[dateObject.getMonth()]
    const date = dateObject.getDate()
    const day = days[dateObject.getDay()]
    const status = "Sunny"

    return (
        <Container className="card">
            <Typography className="dayText">
                {day}
            </Typography>
            <Typography className="dateText">
                {date} {month}
            </Typography>
            <Typography className="weatherText">
                {status}
            </Typography>
        </Container>
    )
}