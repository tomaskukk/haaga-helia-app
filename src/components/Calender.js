import React from 'react'
import DayPicker from 'react-day-picker'
import 'react-day-picker/lib/style.css';
import KideApp from './KideApp'
import Ruokalista from './Ruokalista'

const Calender = ({ handleDayClick, events, selectedDay, foodList }) => {
    const selectedDayAsLocale = (selectedDay.getDate() + '.' 
    + (selectedDay.getMonth() + 1) + '.' 
    + selectedDay.getFullYear()).toString()

    console.log(selectedDay.getDate())

    const nextDayFromSelectedDay = new Date()
    nextDayFromSelectedDay.setDate(selectedDay.getDate() + 1)
    nextDayFromSelectedDay.setMonth(selectedDay.getMonth())
    nextDayFromSelectedDay.setFullYear(selectedDay.getFullYear())
    const nextDayFromSelectedDayAsJSON = nextDayFromSelectedDay.toJSON().substr(0, 10).toString()
    console.log(nextDayFromSelectedDayAsJSON)

    let filteredEvents = events.filter(e => 
        e.dateActualFrom.includes(nextDayFromSelectedDayAsJSON))
        .map(event => 
        <KideApp key={event.id} props={event} />)

    let filterdFoodList = foodList.filter(e => 
        e.Date === selectedDayAsLocale)
        .map(lunchDay => 
        <Ruokalista key={lunchDay.Date} foodList={lunchDay.SetMenus} />)

    const checkIfListEmpty = foodList.filter(e => 
        e.Date === selectedDayAsLocale)
        .map(lunchDay => 
            lunchDay.SetMenus.length
        )

    

    if (checkIfListEmpty[0] === 0 || checkIfListEmpty[0] === undefined) {
        filterdFoodList = 'Not available'
    }
    if (filteredEvents.length === 0) {
        filteredEvents = 'No parties'
    }

    return (
        <div>
            <DayPicker
            onDayClick={handleDayClick}
            selectedDays={selectedDay}
            >
            </DayPicker> 
            <h3>Pasila Amica lunch menu</h3>
            {filterdFoodList}
            <h3>Student parties in Helsinki</h3>
            {filteredEvents}
        </div>
    )
}

export default Calender