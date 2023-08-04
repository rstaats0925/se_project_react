import React from 'react';
import './Toggle.css';

function Toggle () {

  const [tempUnit, setTempUnit] = React.useState('F');

  function handleClick() {
    if (tempUnit === 'F') setTempUnit('C');
    if (tempUnit === 'C') setTempUnit('F');

    console.log(tempUnit);
  }

  return (
    <label className='Toggle'>
      <input type='checkbox'  className='Toggle__checkbox' onChange={handleClick} />
      <span className={tempUnit === 'F' ? "Toggle__slider Toggle__slider-F":"Toggle__slider Toggle__slider-C"}/>
      <p className={tempUnit === 'F' ? "Toggle__F font_active":"Toggle__F font_inactive"}>F</p>
      <p className={tempUnit === 'F' ? "Toggle__C font_inactive":"Toggle__C font_active"}>C</p>
    </label>
  );
}

export default Toggle;
