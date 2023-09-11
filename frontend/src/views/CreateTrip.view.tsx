import {
  Box,
  Container,
  FormControl,
  Input,
  TextField
} from "@mui/material";
import { useState } from "react";
import ActivitiesForm from "../components/ActivitiesAccordion.component";

import { NavBar } from "../components/NavBar.component";

const CreateTrip = () => {
  const [tripTitle, setTripTitle] = useState<string>("");
  const [tripDescription, setTripDescription] = useState<string>("");

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
          <FormControl className={"w-full flex gap-4"}>
            <Input
              placeholder="Trip Name"
              required={true}
              onChange={(e) => setTripTitle(e.target.value)}
              value={tripTitle}
            />
            <TextField
              id="outlined-textarea"
              label="Trip description"
              placeholder="Placeholder"
              multiline
              rows={10}
            />
            <ActivitiesForm />
          </FormControl>
        </Container>
      </Box>
    </Box>
  );
};

export default CreateTrip;
