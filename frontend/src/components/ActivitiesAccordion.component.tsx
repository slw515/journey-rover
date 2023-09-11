import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  Button,
  ListItem,
  ButtonBase,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
import { Activity } from "../types/Activity";
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import { Trip } from "../types/Trip";
const dummyData: Activity[] = [
  {
    id: 1,
    title: "Visit Museum",
    location_name: "National Museum",
    description: "Explore the history and art exhibits.",
    start_time: new Date("2023-09-15T10:00:00Z"),
    end_time: new Date("2023-09-15T14:00:00Z"),
    trip_id: 101,
  },
  {
    id: 2,
    title: "Lunch",
    location_name: "Local Restaurant",
    description: "Enjoy local cuisine for lunch.",
    start_time: new Date("2023-09-15T14:30:00Z"),
    end_time: new Date("2023-09-15T15:30:00Z"),
    trip_id: 101,
  },
  {
    id: 3,
    title: "Hike",
    location_name: "Mountain Trail",
    description: "Scenic hiking in the mountains.",
    start_time: new Date("2023-09-16T09:00:00Z"),
    end_time: new Date("2023-09-16T12:00:00Z"),
    trip_id: 102,
  },
];

const ActivitiesForm = (): JSX.Element => {
  const [isAddingActivity, setIsAddingActivity] = useState<boolean>(false);

  const returnActivityDates = (activity: Activity): JSX.Element | null => {
    if ((!activity.start_time && !activity.end_time) || !activity.start_time) return null;

    if (!activity.end_time) {
      return (
        <div>
          <Typography variant="body1" fontSize={'0.875rem'}>
            <>
              {activity.start_time.toLocaleString()}
            </>
          </Typography>
        </div>
      );
    }

    return (
      <div>
        <Typography variant="body1" fontSize={'0.875rem'}>
          <>
            {activity.start_time.toLocaleString()}{' '} -
            {' '}{activity.end_time.toLocaleString()}
          </>
        </Typography>
      </div>
    );
  }

  return (
    <Accordion className={"m-0"}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h6" className={"pl-0"}>
          Activities
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <List>
          {dummyData.map((activity: Activity) => {
            return (
              <ListItem className={'flex justify-between '}>
                <Typography variant="h6">{activity.title}</Typography>
                <div className={'flex justify-between gap-2 items-center'}>
                  {returnActivityDates(activity)}
                  <ButtonBase className={'h-8 w-8 bg-blue-500 flex items-center justify-center rounded-full'}>
                    <EditRoundedIcon className={"text-white h-5 w-5"} />
                  </ButtonBase>
                </div>
              </ListItem>
            );
          })}
          <Button
            variant="contained"
            onClick={() => setIsAddingActivity((prevState) => !prevState)}
          >
            <AddIcon /> Create A New Activity
          </Button>
        </List>
      </AccordionDetails>
      {/* <div>
        <DatePicker label="Start time" />
        <DatePicker label="End time" />
      </div> */}
    </Accordion>
  );
};

export default ActivitiesForm;
