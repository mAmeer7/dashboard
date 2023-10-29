/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { formatDate } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import listPlugin from "@fullcalendar/list";

import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
  Container,
} from "@mui/material";
import Header from "../../components/Header";
import { token } from "../../theme";

export default function Calender() {
  const theme = useTheme();

  const colors = token(theme.palette.mode);

  const [currentEvents, setCurrentEvents] = useState([]);

  function handleDateClick(selected) {
    const title = prompt("Enter a title");
    const calenderApi = selected.view.calendar;
    calenderApi.unselect();

    if (title) {
      calenderApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  }

  const handleDeleteevent = (selected) => {
    if (window.confirm("Are you sure to Delete this?")) {
      selected.event.remove();
    }
  };

  return (
    <Container>
      <Header title="CALENDER" subtitle='Manage Events' />

      <Box display={"flex"} justifyContent={"space-between"}>
        {/* Sidebar */}
        <Box flex={"1 1 20%"} p={"15px"} borderRadius={"5px"} backgroundColor={`${colors.indigo[400]}`} maxHeight={'80vh'} sx={{
          overflowY:"scroll",
        }} >
          <Typography variant="h6">Events</Typography>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{ backgroundColor: `${colors.blue[500]}`, margin: "10px 0", borderRadius:"10px" }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {formatDate(event.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>
                  {/* Calender */}
        <Box flex={'1 1 100%'} ml={'15px'}>
                  <FullCalendar
                  plugins={[
                    dayGridPlugin,
                    timeGridPlugin,
                    interactionPlugin,
                    listPlugin
                  ]}
                  headerToolbar={{
                    left:"prev,next,today",
                    center:"title",
                    right:'dayGridMonth,timeGridWeek,timeGridDay'
                  }}
                  initialView="dayGridMonth"
                  editable={true}
                  selectable={true}
                  selectMirror={true}
                  dayMaxEvents={true}
                  select={handleDateClick}
                  eventClick={handleDeleteevent}
                  eventsSet={(event)=> setCurrentEvents(event)}
                  initialEvents={[{
                    id:'12',
                    title:'IND vs ENG',
                    date:'2023-10-29'
                  }]}
                  />

                
        </Box>
      </Box>
    </Container>
  );
}
