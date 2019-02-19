import React from 'react'
import DayPicker from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import KideApp from './KideApp'
import Ruokalista from './Ruokalista'
import Button from 'react-bootstrap/Button'
import './css/components.css'


const Calender = ({ handleDayClick, events, selectedDay, foodListPasila,
     foodListMalmi, foodListHaaga, selectedLocation, handleLocationClick }) => {
   
    console.log(foodListHaaga, foodListMalmi, foodListPasila)

    const listToShow = () => {
        switch(selectedLocation) {
            case 'Malmi':
                return foodListMalmi
            case 'Pasila':
                return foodListPasila
            case 'Haaga':
                return foodListHaaga
            default:
                return foodListPasila
        }
    }

        return (
            <div className="calenderContainer">
                <DayPicker
                onDayClick={handleDayClick}
                selectedDays={selectedDay}
                firstDayOfWeek={ 1 }
                >
                </DayPicker>
                <h3>{selectedLocation} Amica lunch menu</h3>
                <Button
                variant="primary"
                onClick={(event) => {handleLocationClick(event, 'Pasila')}}>
                Pasila
                </Button>
                <Button
                variant="info"
                onClick={(event) => {handleLocationClick(event, 'Malmi')}}>
                Malmi
                </Button>
                <Button
                variant="warning"
                onClick={(event) => {handleLocationClick(event, 'Haaga')}}>
                Haaga
                </Button>
                <br></br>
                <Ruokalista 
                selectedDay={selectedDay}
                foodList={listToShow()} />
                <h3>Student parties in Helsinki</h3>
                <KideApp 
                selectedDay={selectedDay}
                props={events} />
            </div>
        )
    }
export default Calender