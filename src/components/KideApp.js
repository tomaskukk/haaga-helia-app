import React from 'react'


const Kideapp = ( { props, selectedDay }) => {

    const nextDayFromSelectedDay = new Date()
    nextDayFromSelectedDay.setDate(selectedDay.getDate())
    nextDayFromSelectedDay.setMonth(selectedDay.getMonth())
    nextDayFromSelectedDay.setFullYear(selectedDay.getFullYear())
    const nextDayFromSelectedDayAsJSON = nextDayFromSelectedDay.toJSON().substr(0, 10).toString()

    let filteredEvents = props.filter(e => 
        e.dateActualFrom.includes(nextDayFromSelectedDayAsJSON))
        .map(event => 
        <p key={event.id}><a href={`https://bailataan.fi/events/${event.id}`} >{event.name}</a></p>)
    
    return (
        <div>
            {filteredEvents}
        </div>
    )
}

export default Kideapp