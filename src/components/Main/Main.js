import ItemCard from "../ItemCard/ItemCard";
import Weather from "../Weather/Weather";
import './Main.css';
import React from 'react';
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";



function Main({temperature, clothes, onSelectedCard}) {

  const {currentTemperatureUnit} = React.useContext(CurrentTemperatureUnitContext);
  const fahrenheit = temperature.F;

  const weatherType = React.useMemo(() => {
    if (fahrenheit < 50) {
      return "cold";
    } else if (fahrenheit >= 50 && fahrenheit < 70 ) {
      return "warm";
    } else if (fahrenheit >= 70) {
      return "hot";
    }
  }, [fahrenheit]);

  const appropriateClothing = clothes.filter(clothing => {
    return clothing.weather === weatherType;
  });

 const clothingItems = appropriateClothing.map(item => {
    return (
      <li className="clothes__item" key={item._id}>
        <ItemCard item={item} onSelectedCard={onSelectedCard} />
      </li>
    )
  })

  return (
    <main className="Main">
      <Weather day={true} type='sunny' temperature={temperature}></Weather>
      <section className='clothes'>
        <p className='clothes__message'>Today is {temperature[currentTemperatureUnit]}&#176;{currentTemperatureUnit} / You may want to wear:</p>
        <ul className='clothes__flex-container'>
          {clothingItems}
        </ul>
      </section>
    </main>
  );
}

export default Main;
