import React from 'react'
import RuokalistaName from './RuokalistaNames'
import Table from 'react-bootstrap/Table'

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
        filterdfoodList = <tr><td>Not available</td><td></td></tr>
    }

    return (
        <div>
        <Table className="table" striped bordered hover>
        <tbody>
            <tr>
                <th>
                    {selectedLocation} lunch menu
                </th>
                <th>
                    Allergens
                </th>
            </tr>
            
        {filterdfoodList}
        </tbody>
        </Table>
        </div>
        )
}

export default Ruokalista