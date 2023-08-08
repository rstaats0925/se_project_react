import React from 'react';
import './Toggle.css';
import CurrentTemperatureUnitContext from '../../contexts/CurrentTemperatureUnitContext.js';

function Toggle () {

  const temperatureUnit = React.useContext(CurrentTemperatureUnitContext);

  function handleClick () {
    if (temperatureUnit.currentTemperatureUnit === 'F') {
      temperatureUnit.handleToggleSwitchChange();
    } else if (temperatureUnit.currentTemperatureUnit === 'C') {
      temperatureUnit.handleToggleSwitchChange();
    }
  }

  return (
    <label className='Toggle'>
      <input type='checkbox'  className='Toggle__checkbox' onClick={handleClick} />
      <span className={temperatureUnit.currentTemperatureUnit === 'F' ? "Toggle__slider Toggle__slider-F":"Toggle__slider Toggle__slider-C"}/>
      <p className={temperatureUnit.currentTemperatureUnit === 'F' ? "Toggle__C font_inactive":"Toggle__C font_active"}>C</p>
      <p className={temperatureUnit.currentTemperatureUnit === 'F' ? "Toggle__F font_active":"Toggle__F font_inactive"}>F</p>
    </label>
  );
}

export default Toggle;
