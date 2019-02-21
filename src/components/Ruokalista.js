import React from 'react'
import RuokalistaName from './RuokalistaNames'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

const Ruokalista = ({ foodList, selectedDay, selectedLocation, handleLocationClick }) => {

    const selectedDayAsLocale = (selectedDay.getDate() + '.' 
    + (selectedDay.getMonth() + 1) + '.' 
    + selectedDay.getFullYear()).toString()

    // show only the days lunchmenu that is selected in calender
    let filterdfoodList = foodList.filter(e => 
        e.Date === selectedDayAsLocale)
        .map(lunchDay => 
            lunchDay.SetMenus.map(setMenu => 
                setMenu.Meals.map(meal =>
                    <RuokalistaName key={meal.RecipeId} foodList={meal} />
    )))
           
    if (filterdfoodList.length === 0 || filterdfoodList[0].length === 0) {
        filterdfoodList = <tr><td>Not available</td></tr>
    }

    return (
        <div>
        <h5>{selectedLocation} Amica lunch menu</h5>
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
        <Table className="table" striped bordered hover>
        <tbody>
        {filterdfoodList}
        </tbody>
        </Table>
        </div>
        )
}

export default Ruokalista