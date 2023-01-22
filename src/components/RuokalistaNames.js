import React from "react";
import RuokalistaDiet from "./RuokalistaDiet";
import "./css/components.css";
import Table from "react-bootstrap/Table";
import Keygenerator from "../services/Keygenerator";

const RuokalistaName = ({ foodList }) => {
  const handleOnDragStart = e => e.preventDefault();

  // go through the JSON response got from API
  const foodListToRender = foodList.meals.map(meal => (
    <tr key={Keygenerator.getRandomKey()}>
      <td>{meal.name}</td>
      <td className="dietsStyle">
        {
          <RuokalistaDiet
            key={Keygenerator.getRandomKey()}
            foodListDiet={meal.diets}
          />
        }
      </td>
    </tr>
  ));

  return (
    <Table striped bordered hover id="linjastoMenu">
      <tbody onDragStart={handleOnDragStart}>
        {foodListToRender}
      </tbody>
    </Table>
  );
};

export default RuokalistaName;
