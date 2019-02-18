import React from 'react'
import RuokalistaName from './RuokalistaNames'
import Table from 'react-bootstrap/Table'

const Ruokalista = ({ foodList,  }) => {
    console.log(foodList)


    return (
        <div>
        <Table responsive="lg" striped bordered hover variant="dark">
        <tbody>
        {foodList[0].Meals.map(meals =>
                <RuokalistaName key={meals.RecipeId} foodList={meals} />
            )}
        </tbody>
        </Table>

        <Table responsive="lg" striped bordered hover variant="dark">
        <tbody>
        {foodList[1].Meals.map(meals =>
                <RuokalistaName key={meals.RecipeId} foodList={meals} />
            )}
        </tbody>
        </Table>
        </div>
        )
}

export default Ruokalista