import React from 'react'

const RuokalistaDiet = ({ foodListDiet }) => {
  return (
    <div>
      ({foodListDiet.map(diet => diet + ', ')})
    </div>
  )
}

export default RuokalistaDiet