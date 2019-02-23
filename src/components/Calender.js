import React from 'react'
import DayPicker from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import KideApp from './KideApp'
import Ruokalista from './Ruokalista'
import './css/components.css'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'


const Calender = ({ handleDayClick, events, selectedDay, foodListPasila,
     foodListMalmi, foodListHaaga, selectedLocation, handleLocationClick }) => {
   

    const selectedPretty = selectedDay.toLocaleDateString()


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
                <h4 className="headerForLunchAndParties">Lunch and parties on {selectedPretty}</h4>
                <ButtonGroup className="lunchButtons">
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
                </ButtonGroup>
                <DayPicker
                className="calender"
                onDayClick={handleDayClick}
                selectedDays={selectedDay}
                firstDayOfWeek={ 1 }
                >
                </DayPicker>
                <Ruokalista 
                selectedDay={selectedDay}
                foodList={listToShow()}
                selectedLocation={selectedLocation}
                handleLocationClick={handleLocationClick}/>
                <KideApp 
                selectedDay={selectedDay}
                props={events} />
            </div>
        )
    }
export default Calender