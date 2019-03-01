import React from 'react'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import KideApp from './KideApp'
import Ruokalista from './Ruokalista'
import './css/components.css'


const Calender = ({ handleDayClick, events, selectedDay, foodListPasila,
     foodListMalmi, foodListHaaga, selectedLocation, handleLocationClick }) => {
   



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

                <Ruokalista 
                selectedDay={selectedDay}
                foodList={listToShow()}
                selectedLocation={selectedLocation}
                handleDayClick={handleDayClick}
                />

                <KideApp 
                selectedDay={selectedDay}
                props={events} />
            </div>
        )
    }
export default Calender