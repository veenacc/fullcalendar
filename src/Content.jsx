
import { React } from "react"
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import axios from "axios";
import { useState, useEffect } from "react";
// import '@fullcalendar/common/main.css';
// import '@fullcalendar/daygrid/main.css';
// import '@fullcalendar/timegrid/main.css';
  



export function Content() {

  const [events, setEvents] = useState([]);

  const handleIndexEvents = () => {
    console.log("handleIndexEvents");
    axios.get("http://localhost:3000/weddings.json").then((response) => {
      console.log(response.data);
      setEvents(response.data);
    });
   };

  useEffect(handleIndexEvents, []);

  // const [events, setEvents] = useState([
  //   { title: 'Event 1', start: '2023-07-01' },
  //   { title: 'Event 2', start: '2023-07-05', end: '2023-07-07' },
  //   { title: 'Event 3', start: '2023-07-09T12:30:00', allDay: false }
  // ]);

  // const handleDateClick = (arg) => {
  //   alert('Date clicked: ' + arg.dateStr);
  // };

  return (
    <FullCalendar
      plugins={[ dayGridPlugin ]}
      initialView="dayGridMonth"
      weekends={true}
      events={events.map((evnt)=>(
        {evnt.name} ,
        {evnt.start_time} ,
        {evnt.end_time}

      ))}
    />
  )

  // [
  //   { title: 'event 1', start: '2024-07-20', end: '2024-07-21'},
  //   { title: 'event 2', start: '2024-07-21', end: '2024-07-22' }
  // ]
  // return (
    
      // <FullCalendar
      //   initialView="timeGridDay"
      //   headerToolbar=  {{
      //     left:"prev,next,today,addEventButton",
      //     center: "title",
      //     right:"dayGridMonth,timeGridDay,timeGridWeek"
      //   }}
      //   plugins={[DayGridPlugin,TimeGridPlugin,InteractionPlugin]}
      // />

    //   <FullCalendar
    //   plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
    //   initialView="dayGridMonth"
    //   events={events}
    //   dateClick={handleDateClick}
    //   selectable={true}
    //   editable={true}
    // />
    
  // );
}

