import React from 'react'
import Table from 'react-bootstrap/Table'
import strings from './Langstrings'


const Kideapp = ( { props, selectedDay }) => {

    
    let selectedDate = new Date()
    selectedDate.setDate(selectedDate.getDate() + selectedDay)


    const nextDayFromSelectedDay = new Date()
    nextDayFromSelectedDay.setDate(selectedDate.getDate())
    nextDayFromSelectedDay.setMonth(selectedDate.getMonth())
    nextDayFromSelectedDay.setFullYear(selectedDate.getFullYear())
    const nextDayFromSelectedDayAsJSON = nextDayFromSelectedDay.toJSON().substr(0, 10).toString()


    // show only events that are happening on the day selected on calender
    let filteredEvents = props.filter(e => 
        e.dateActualFrom.includes(nextDayFromSelectedDayAsJSON))
        .map(event => 
        <tr key={event.id}><td>
        <a className="cool-link" rel="noopener noreferrer" target="_blank" href={`https://bailataan.fi/events/${event.id}`}>{event.name}</a>
        </td></tr>)
    
    if (filteredEvents.length === 0) {
        filteredEvents = <tr><td>{strings.noParties}</td></tr>
    }
    
    return (
        <div id="partyDiv">
            <h5>{strings.partiesHeader} {nextDayFromSelectedDay.toLocaleDateString()}</h5>
        <Table striped bordered hover className="table">
        <tbody>
            {filteredEvents}
        </tbody>
        </Table>
        </div>
    )
}

export default Kideapp