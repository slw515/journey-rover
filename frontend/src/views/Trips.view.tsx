import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";

import { NavBar } from "../components/NavBar.component";
import { Trip } from "../types/Trip";
import { ButtonBase, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const dummyData: Trip[] = [
  {
    id: 1,
    title: "Rome",
    description: "Trip to Rome in 2023 with walking and archaelogical tours.",
    start_time: new Date("2023-09-10T09:00:00Z"),
    end_time: new Date("2023-09-15T17:00:00Z"),
    activities: [1, 2],
  },
  {
    id: 2,
    title: "Peru",
    description:
      "Trip to Peru in 2023 with loads of fun things to do. Trip to Peru in 2023 with loads of fun things to do. Trip to Peru in 2023 with loads of fun things to do.",
    start_time: new Date("2023-10-05T08:00:00Z"),
    end_time: new Date("2023-10-12T16:00:00Z"),
    activities: [4, 3],
  },
];

const Trips = () => {
  let navigate = useNavigate();

  const [trips, setTrips] = useState<Trip[]>([]);

  useEffect(() => {
    const retrieveTrips = async () => {
      const { data } = await axios.get("http://localhost:8080/activities");
      setTrips(data);
    };

    retrieveTrips();
  }, []);

  const routeToCreateTrip = (): void => {
    navigate("/create-trip");
  };

  const routeToTripPage = (): void => {
    navigate("/trip");
  };

  const returnTripDates = (trip: Trip): JSX.Element | null => {
    if ((!trip.start_time && !trip.end_time) || !trip.start_time) return null;

    if (!trip.end_time) {
      return (
        <div>
          <Divider className={"my-2"} />
          <Typography variant="subtitle2">
            <>
              {trip.start_time.toLocaleString()}
            </>
          </Typography>
        </div>
      );
    }

    return (
      <div>
        <Divider className={"my-2"} />
        <Typography variant="subtitle2">
          <>
            {trip.start_time.toLocaleString()} - <br />
            {trip.end_time.toLocaleString()}
          </>
        </Typography>
      </div>
    );
  };

  return (
    <Box sx={{ display: "flex" }}>
      <NavBar />
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Container className={"mt-24 mb-8 justify-center"}>
          <Grid container spacing={2} className={"justify-center"}>
            <Box sx={{}} className={"pt-16 pb-12 justify-center"}>
              <Container maxWidth="sm">
                <Typography
                  component="h1"
                  variant="h2"
                  align="center"
                  color="text.primary"
                  gutterBottom
                >
                  My Trips
                </Typography>
                <Stack
                  sx={{ pt: 4 }}
                  direction="row"
                  spacing={2}
                  justifyContent="center"
                >
                  <Button variant="contained" onClick={routeToCreateTrip}>
                    <AddIcon /> Create A New Trip
                  </Button>
                </Stack>
              </Container>
            </Box>
            <Container sx={{ py: 8 }} maxWidth="md">
              <Grid container spacing={4}>
                {trips.map((trip: Trip) => (
                  <Grid item key={trip.id} xs={12} sm={6} md={4}>
                    <ButtonBase
                      onClick={routeToTripPage}
                      className={"h-full w-full"}
                    >
                      <Card
                        sx={{
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                        }}
                        className={"h-full w-full"}
                      >
                        <CardMedia
                          component="div"
                          sx={{
                            pt: "56.25%",
                          }}
                          image="https://source.unsplash.com/random?wallpapers"
                        />
                        <CardContent
                          className={"flex flex-col justify-between h-full"}
                        >
                          <div>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="h2"
                            >
                              {trip.title}
                            </Typography>
                            <Typography>{trip.description}</Typography>
                          </div>
                          {returnTripDates(trip)}
                        </CardContent>
                      </Card>
                    </ButtonBase>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Trips;
