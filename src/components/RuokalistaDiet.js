import React from 'react';

const RuokalistaDiet = ({ foodListDiet }) => {
  return (
    <div>
      ({foodListDiet.map((diet, i) => 
      foodListDiet.length - 1 === i ? diet : diet + ', ')})
    </div>
  );
};

export default RuokalistaDiet;
