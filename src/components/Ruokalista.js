import React from 'react'
import RuokalistaName from './RuokalistaNames'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import strings from './Langstrings'

const Ruokalista = ({ foodList, selectedDay, selectedLocation, handleDayClick, handleLocationClick }) => {

    const getRandomKey = () => Math.random().toString(36).substring(7);

    const thisDay = new Date()
    thisDay.setDate(thisDay.getDate() + selectedDay)


    const selectedDayAsLocale = (thisDay.getDate() + '.' 
    + (thisDay.getMonth() + 1) + '.' 
    + thisDay.getFullYear()).toString()


    // show only the days lunchmenu that is selected in calender
    let filterdfoodList = foodList.filter(e => 
        e.Date === selectedDayAsLocale)
        .map(lunchDay => 
            lunchDay.SetMenus.map(setMenu => 
                    <RuokalistaName key={getRandomKey()} foodList={setMenu} />
    ))


    if (filterdfoodList.length === 0) {
        filterdfoodList = <Table id="lunchMenu" striped bordered hover><tbody><tr><td>{strings.notAvYet}</td><td></td></tr></tbody></Table>
    } else if (filterdfoodList[0].length === 0) {
        filterdfoodList = <Table id="lunchMenu" striped bordered hover><tbody><tr><td>{strings.noServing}</td><td></td></tr></tbody></Table>
    } else if (filterdfoodList === undefined ) {
        filterdfoodList = <Table id="lunchMenu" striped bordered hover><tbody><tr><td>{strings.notAv}</td><td></td></tr></tbody></Table>
    }
    
    return (
        <div>

<ButtonGroup className="lunchButtons">
                <Button
                id="pasilaButton"
                variant="primary"
                onClick={(event) => {handleLocationClick(event, 'Pasila')}}>
                Pasila
                </Button>
                <Button
                id="malmiButton"
                variant="info"
                onClick={(event) => {handleLocationClick(event, 'Malmi')}}>
                Malmi
                </Button>
                <Button
                id="haagaButton"
                variant="warning"
                onClick={(event) => {handleLocationClick(event, 'Haaga')}}>
                Haaga
                </Button>
                
                </ButtonGroup>
          
        <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">
            <ButtonGroup className="mr-2" aria-label="First group">
            <Button id="1" variant="secondary" onClick={() => handleDayClick(1)}>{strings.mo}</Button>
            <Button id="2" variant="secondary" onClick={() => handleDayClick(2)}>{strings.tu}</Button>
            <Button id="3" variant="secondary" onClick={() => handleDayClick(3)}>{strings.we}</Button>
            <Button id="4" variant="secondary" onClick={() => handleDayClick(4)}>{strings.th}</Button>
            <Button id="5" variant="secondary" onClick={() => handleDayClick(5)}>{strings.fr}</Button>
            <Button id="6" variant="secondary" onClick={() => handleDayClick(6)}>{strings.sa}</Button>
            </ButtonGroup>
         </ButtonToolbar>
        <h5>{selectedLocation} {strings.lunchmenu} {thisDay.toLocaleDateString()}</h5>
         
            <div>{filterdfoodList}
            </div>
        </div>
        )
}

export default Ruokalista
