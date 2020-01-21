import React from 'react';
import RuokalistaDiet from './RuokalistaDiet';
import './css/components.css';
import Table from 'react-bootstrap/Table';
import strings from './Langstrings';
import Keygenerator from '../services/Keygenerator';

const RuokalistaName = ({foodList}) => {

  const handleOnDragStart = (e) => e.preventDefault();

  // go through the JSON response got from API 
  const foodListToRender = foodList.Meals.map((meal) =>
    <tr key={Keygenerator.getRandomKey()}>
      <td>{meal.Name}</td>
      <td className="dietsStyle">
        {<RuokalistaDiet
          key={Keygenerator.getRandomKey()}
          foodListDiet={meal.Diets}/>}
      </td>
    </tr>,
  );

  return (
    <Table striped bordered hover id="linjastoMenu">
      <tbody onDragStart={handleOnDragStart}>
        <tr>
          <th>{foodList.Name}</th>
          <th>{strings.allergens}</th>
        </tr>
        {foodListToRender}
      </tbody>
    </Table>
  );
};


export default RuokalistaName;
