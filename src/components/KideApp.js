import React from 'react'
import Table from 'react-bootstrap/Table'


const Kideapp = ( { props, selectedDay }) => {

    const nextDayFromSelectedDay = new Date()
    nextDayFromSelectedDay.setDate(selectedDay.getDate())
    nextDayFromSelectedDay.setMonth(selectedDay.getMonth())
    nextDayFromSelectedDay.setFullYear(selectedDay.getFullYear())
    const nextDayFromSelectedDayAsJSON = nextDayFromSelectedDay.toJSON().substr(0, 10).toString()

    // show only events that are happening on the day selected on calender
    let filteredEvents = props.filter(e => 
        e.dateActualFrom.includes(nextDayFromSelectedDayAsJSON))
        .map(event => 
        <tr key={event.id}><td>
        <a className="cool-link" rel="noopener noreferrer" target="_blank" href={`https://bailataan.fi/events/${event.id}`}>{event.name}</a>
        </td></tr>)
    
    if (filteredEvents.length === 0) {
        filteredEvents = <tr><td>No parties on this day</td></tr>
    }
    
    return (
        <div>
            <h5>Student parties in Helsinki</h5>
        <Table striped bordered hover className="table">
        <tbody>
            {filteredEvents}
        </tbody>
        </Table>
        </div>
    )
}

export default Kideapp