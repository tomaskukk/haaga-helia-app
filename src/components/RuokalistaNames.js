import React from 'react'
import RuokalistaDiet from './RuokalistaDiet'
import './css/components.css'
import Table from 'react-bootstrap/Table'
import strings from './Langstrings'

const RuokalistaName = ({ foodList }) => {
  const getRandomKey = () => Math.random().toString(36).substring(7);
  const handleOnDragStart = e => e.preventDefault()

  const foodListToRender = foodList.Meals.map(meal => 
    <tr key={getRandomKey()}>
    <td>{meal.Name}</td>
    <td className="dietsStyle">
    {<RuokalistaDiet 
    key={getRandomKey()} 
    foodListDiet={meal.Diets}/>}</td>
    </tr>
  )
  return (
    <Table striped bordered hover id="linjastoMenu">
      <tbody onDragStart={handleOnDragStart}>
      <tr><th>{foodList.Name}</th><th>{strings.allergens}</th></tr>
      {foodListToRender}
      </tbody>
    </Table>
  )
}


export default RuokalistaName