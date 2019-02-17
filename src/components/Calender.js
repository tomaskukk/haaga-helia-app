import React from 'react'
import DayPicker from 'react-day-picker'
import 'react-day-picker/lib/style.css';
import KideApp from './KideApp'

const Calender = ({ handleDayClick, events, selectedDay }) => {

    const nextDayFromSelectedDay = new Date()
    nextDayFromSelectedDay.setDate({selectedDay}.selectedDay.getDate())
    const nextDayFromSelectedDayAsJSON = nextDayFromSelectedDay.toJSON().substr(0, 10).toString()
    console.log(nextDayFromSelectedDayAsJSON)
    return (
        <div>
            <h4>Change day to see events on other days</h4>
            <DayPicker
            onDayClick={handleDayClick}
            selectedDays={selectedDay}
            canChangeMonth={false}
            >
            </DayPicker> 
            <h3>Student parties in Helsinki on {nextDayFromSelectedDayAsJSON}</h3>
            {events.filter(e => 
            e.dateActualFrom.includes(nextDayFromSelectedDayAsJSON))
            .map(event => <KideApp key={event.id} props={event} />)}
        </div>
    )
}

export default Calender