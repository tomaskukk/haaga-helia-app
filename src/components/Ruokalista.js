import React from 'react'
import RuokalistaName from './RuokalistaNames'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

const Ruokalista = ({ foodList, selectedDay, selectedLocation, handleDayClick }) => {

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
        filterdfoodList = <Table id="lunchMenu" striped bordered hover><tbody><tr><td>Not available yet</td><td></td></tr></tbody></Table>
    } else if (filterdfoodList[0].length === 0) {
        filterdfoodList = <Table id="lunchMenu" striped bordered hover><tbody><tr><td>No serving on this day</td><td></td></tr></tbody></Table>
    } else if (filterdfoodList === undefined ) {
        filterdfoodList = <Table id="lunchMenu" striped bordered hover><tbody><tr><td>Not available</td><td></td></tr></tbody></Table>
    }
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      }

    return (
        <div>
        <h4>{selectedLocation} lunch menu {thisDay.toLocaleDateString()}</h4>
        <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">
            <ButtonGroup className="mr-2" aria-label="First group">
            <Button id="1" variant="secondary" onClick={() => handleDayClick(1)}>Mo</Button>
            <Button id="2" variant="secondary" onClick={() => handleDayClick(2)}>Tu</Button>
            <Button id="3" variant="secondary" onClick={() => handleDayClick(3)}>We</Button>
            <Button id="4" variant="secondary" onClick={() => handleDayClick(4)}>Th</Button>
            <Button id="5" variant="secondary" onClick={() => handleDayClick(5)}>Fr</Button>
            </ButtonGroup>
         </ButtonToolbar>
            {filterdfoodList}
        </div>
        )
}

export default Ruokalista
