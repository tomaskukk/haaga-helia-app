import React from 'react'
import RuokalistaDiet from './RuokalistaDiet'
import './css/components.css'
const RuokalistaName = ({ foodList }) => {

  return (
      <tr key={foodList.RecipeId}><td className="tableRows">{foodList.Name}</td><td className="dietsStyle"><RuokalistaDiet key={foodList.RecipeId} 
      foodListDiet={foodList.Diets} /></td></tr>
  )
}

export default RuokalistaName