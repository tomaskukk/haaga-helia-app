import React from 'react'
import RuokalistaName from './RuokalistaNames'
import Table from 'react-bootstrap/Table'

const Ruokalista = ({ foodList, selectedDay }) => {

    const selectedDayAsLocale = (selectedDay.getDate() + '.' 
    + (selectedDay.getMonth() + 1) + '.' 
    + selectedDay.getFullYear()).toString()


    let filterdfoodList = foodList.filter(e => 
        e.Date === selectedDayAsLocale)
        .map(lunchDay => 
            lunchDay.SetMenus.map(setMenu => 
                setMenu.Meals.map(meal =>
                    <RuokalistaName key={meal.RecipeId} foodList={meal} />
    )))

    if (filterdfoodList.length === 0) {
        filterdfoodList = <tr><td>Not available</td></tr>
    }

    return (
        <div>
        <Table responsive="lg" striped bordered hover variant="dark">
        <tbody>
        {filterdfoodList}
        </tbody>
        </Table>
        </div>
        )
}

export default Ruokalista